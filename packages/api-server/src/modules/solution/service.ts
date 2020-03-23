import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, FindOneOptions, QueryRunner, Repository } from 'typeorm'

import { SolutionCreateInput, SolutionDeleteInput, SolutionUpdateInput } from '../../graphql/schema'
import { CustomException } from '../../exceptions/custom-exception/exception'
import { SolutionEntity } from '../../entities'
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

  async create(
    createInput: SolutionCreateInput,
    options: IServiceBaseOptions = getDefaultServiceOptions()
  ): Promise<SolutionEntity> {
    const { name } = createInput
    const { relations, customQueryRunner } = options

    const solutionRepository = customQueryRunner
      ? customQueryRunner.manager.getRepository(SolutionEntity)
      : this.solutionRepository

    const drySolutionRecord = new SolutionEntity({ name })
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
