import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, FindOneOptions, QueryRunner, Repository } from 'typeorm'

import {
  Solution,
  SolutionComputeInput,
  SolutionCreateInput,
  SolutionDeleteInput,
  SolutionUpdateInput,
} from '../../graphql/schema'
import { CustomException } from '../../exceptions/custom-exception/exception'
import { ProjectAssignmentEntity, SolutionEntity } from '../../entities'
import { ITypeOrmService } from '../../common/interfaces/typeorm-service'
import {
  getDefaultServiceOptions,
  IServiceBaseOptions,
  IServiceDeleteOptionsRepo,
  IServiceUpdateOptionsRepo,
} from '../../common/types/service-options'

@Injectable()
export class SolutionService implements ITypeOrmService<SolutionEntity> {
  constructor(@InjectRepository(SolutionEntity) private readonly solutionRepository: Repository<SolutionEntity>) {}

  compute(computeInput: SolutionComputeInput): Solution {
    const solution = new SolutionEntity()
    solution.name = 'solution-0'
    solution.projectAssignments = [
      new ProjectAssignmentEntity({ studentOneEmail: 'stu-1', studentTwoEmail: 'stu-2', projectName: 'project-1' }),
      new ProjectAssignmentEntity({ studentOneEmail: 'stu-3', studentTwoEmail: 'stu-4', projectName: 'project-2' }),
      new ProjectAssignmentEntity({ studentOneEmail: 'stu-5', studentTwoEmail: 'stu-6', projectName: 'project-3' }),
      new ProjectAssignmentEntity({ studentOneEmail: 'stu-7', studentTwoEmail: 'stu-8', projectName: 'project-4' }),
    ]

    return solution
  }

  async create(
    createInput: SolutionCreateInput,
    options: IServiceBaseOptions = getDefaultServiceOptions()
  ): Promise<SolutionEntity> {
    const { name, projectAssignments } = createInput
    const { relations, customQueryRunner } = options

    const solutionRepository = customQueryRunner
      ? customQueryRunner.manager.getRepository(SolutionEntity)
      : this.solutionRepository

    const drySolutionRecord = new SolutionEntity({ name })
    drySolutionRecord.projectAssignments = projectAssignments.map(
      (projectAssignment) => new ProjectAssignmentEntity({ ...projectAssignment, solution: drySolutionRecord })
    )

    const { id } = await solutionRepository.save(drySolutionRecord)

    return this.findOneOrFail({ where: { id }, relations }, customQueryRunner)
  }

  findOne(
    options: FindOneOptions<SolutionEntity>,
    customQueryRunner?: QueryRunner
  ): Promise<SolutionEntity | undefined> {
    const aisleRepository = customQueryRunner
      ? customQueryRunner.manager.getRepository(SolutionEntity)
      : this.solutionRepository

    return aisleRepository.findOne(options)
  }

  async findOneOrFail(
    options: FindOneOptions<SolutionEntity>,
    customQueryRunner?: QueryRunner
  ): Promise<SolutionEntity> {
    const storeRecord = await this.findOne(options, customQueryRunner)
    if (!storeRecord) throw new CustomException('STORE_NOT_FOUND')

    return storeRecord
  }

  findMany(options: FindManyOptions<SolutionEntity>): Promise<SolutionEntity[]> {
    return this.solutionRepository.find(options)
  }

  async update(
    updateInput: SolutionUpdateInput,
    options: IServiceUpdateOptionsRepo<SolutionEntity> = getDefaultServiceOptions()
  ): Promise<SolutionEntity> {
    const { uuid, name } = updateInput
    const { relations, repoFindTransformer } = options

    const findOptions = {
      where: { uuid },
    }
    if (repoFindTransformer) repoFindTransformer(findOptions)

    const solutionRecord = await this.findOneOrFail(findOptions)

    solutionRecord.patch({ name })
    await this.solutionRepository.save(solutionRecord)

    return this.findOneOrFail({ where: { id: solutionRecord.id }, relations })
  }

  async delete(
    deleteInput: SolutionDeleteInput,
    options: IServiceDeleteOptionsRepo<SolutionEntity> = {}
  ): Promise<boolean> {
    const { uuid } = deleteInput

    const { repoFindTransformer } = options

    const findOptions = { where: { uuid } }
    if (repoFindTransformer) repoFindTransformer(findOptions)

    const { id } = await this.findOneOrFail(findOptions)

    await this.solutionRepository.delete(id)

    return true
  }
}
