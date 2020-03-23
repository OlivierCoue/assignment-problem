import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, FindOneOptions, QueryRunner, Repository } from 'typeorm'

import {
  ProjectAssignmentCreateInput,
  ProjectAssignmentDeleteInput,
  ProjectAssignmentUpdateInput,
} from '../../../graphql/schema'
import { CustomException } from '../../../exceptions/custom-exception/exception'
import { ProjectAssignmentEntity, SolutionEntity } from '../../../entities'
import { ITypeOrmService } from '../../../common/interfaces/typeorm-service'
import {
  getDefaultServiceOptions,
  IServiceBaseOptions,
  IServiceDeleteOptionsRepo,
  IServiceUpdateOptionsRepo,
} from '../../../common/types/service-options'

@Injectable()
export class ProjectAssignmentService implements ITypeOrmService<ProjectAssignmentEntity> {
  constructor(
    @InjectRepository(ProjectAssignmentEntity)
    private readonly projectAssignmentRepository: Repository<ProjectAssignmentEntity>,
    @InjectRepository(SolutionEntity)
    private readonly solutionRepository: Repository<SolutionEntity>
  ) {}

  async create(
    createInput: ProjectAssignmentCreateInput,
    options: IServiceBaseOptions = getDefaultServiceOptions()
  ): Promise<ProjectAssignmentEntity> {
    const { solutionUuid, projectName, studentOneEmail, studentTwoEmail } = createInput
    const { relations, customQueryRunner } = options

    const projectAssignmentRepository = customQueryRunner
      ? customQueryRunner.manager.getRepository(ProjectAssignmentEntity)
      : this.projectAssignmentRepository

    const solution = await this.solutionRepository.findOneOrFail({ uuid: solutionUuid })

    const dryProjectAssignmentRecord = new ProjectAssignmentEntity({
      solution,
      projectName,
      studentOneEmail,
      studentTwoEmail,
    })
    const { id } = await projectAssignmentRepository.save(dryProjectAssignmentRecord)

    return this.findOneOrFail({ where: { id }, relations }, customQueryRunner)
  }

  findOne(
    options: FindOneOptions<ProjectAssignmentEntity>,
    customQueryRunner?: QueryRunner
  ): Promise<ProjectAssignmentEntity | undefined> {
    const aisleRepository = customQueryRunner
      ? customQueryRunner.manager.getRepository(ProjectAssignmentEntity)
      : this.projectAssignmentRepository

    return aisleRepository.findOne(options)
  }

  async findOneOrFail(
    options: FindOneOptions<ProjectAssignmentEntity>,
    customQueryRunner?: QueryRunner
  ): Promise<ProjectAssignmentEntity> {
    const storeRecord = await this.findOne(options, customQueryRunner)
    if (!storeRecord) throw new CustomException('STORE_NOT_FOUND')

    return storeRecord
  }

  findMany(options: FindManyOptions<ProjectAssignmentEntity>): Promise<ProjectAssignmentEntity[]> {
    return this.projectAssignmentRepository.find(options)
  }

  async update(
    updateInput: ProjectAssignmentUpdateInput,
    options: IServiceUpdateOptionsRepo<ProjectAssignmentEntity> = getDefaultServiceOptions()
  ): Promise<ProjectAssignmentEntity> {
    const { uuid } = updateInput
    const { relations, repoFindTransformer } = options

    const findOptions = {
      where: { uuid },
    }
    if (repoFindTransformer) repoFindTransformer(findOptions)

    const projectAssignmentRecord = await this.findOneOrFail(findOptions)

    projectAssignmentRecord.patch({})
    await this.projectAssignmentRepository.save(projectAssignmentRecord)

    return this.findOneOrFail({ where: { id: projectAssignmentRecord.id }, relations })
  }

  async delete(
    deleteInput: ProjectAssignmentDeleteInput,
    options: IServiceDeleteOptionsRepo<ProjectAssignmentEntity> = {}
  ): Promise<boolean> {
    const { uuid } = deleteInput

    const { repoFindTransformer } = options

    const findOptions = { where: { uuid } }
    if (repoFindTransformer) repoFindTransformer(findOptions)

    const { id } = await this.findOneOrFail(findOptions)

    await this.projectAssignmentRepository.delete(id)

    return true
  }
}
