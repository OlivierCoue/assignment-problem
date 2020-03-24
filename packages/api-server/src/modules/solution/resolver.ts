import { Args, Context, Mutation, Query, Resolver, ResolverPrefix } from '@nestjs/graphql'
import { GraphQLRelations } from '@mysg/nest-common'
import { classToPlain } from 'class-transformer'
import { UseRoles } from 'nest-access-control'
import { forwardRef, Inject } from '@nestjs/common'

import {
  Solution, SolutionComputeInput,
  SolutionCreateInput,
  SolutionDeleteInput,
  SolutionFindManyInput,
  SolutionFindOneInput,
  SolutionUpdateInput,
} from '../../graphql/schema'
import { IGraphQLContext } from '../../graphql/options'
import { AuthorizationResources } from '../authorization/permission-builder'

import { SolutionService } from './service'

const commonRelationsIncluded = ['projectAssignments']

@Resolver('Solution')
@ResolverPrefix('Solution_')
export class SolutionResolver {
  constructor(@Inject(forwardRef(() => SolutionService)) private readonly solutionService: SolutionService) {}

  /*
  @UseRoles({
    resource: AuthorizationResources.SOLUTION,
    action: 'create',
    possession: 'any',
  })
  */
  @Mutation()
  compute(
    @Args('computeInput') computeInput: SolutionComputeInput,
    @GraphQLRelations({ entityName: 'SolutionEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Solution {
    return this.solutionService.compute(computeInput)
  }

  @UseRoles({
    resource: AuthorizationResources.SOLUTION,
    action: 'create',
    possession: 'any',
  })
  @Mutation()
  createOne(
    @Args('createInput') createInput: SolutionCreateInput,
    @GraphQLRelations({ entityName: 'SolutionEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Promise<Solution> {
    return this.solutionService.create(createInput, { relations })
  }

  @UseRoles({
    resource: AuthorizationResources.SOLUTION,
    action: 'read',
    possession: 'own',
  })
  @Query()
  findOne(
    @Args('findOneInput') findOneInput: SolutionFindOneInput,
    @GraphQLRelations({ entityName: 'SolutionEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Promise<Solution | undefined> {
    return this.solutionService.findOne(classToPlain({ ...findOneInput, relations }))
  }

  @UseRoles({
    resource: AuthorizationResources.SOLUTION,
    action: 'read',
    possession: 'own',
  })
  @Query()
  findMany(
    @Args('findManyInput') findManyInput: SolutionFindManyInput,
    @GraphQLRelations({ entityName: 'SolutionEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Promise<Solution[]> {
    return this.solutionService.findMany(classToPlain({ ...findManyInput, relations }))
  }

  @UseRoles({
    resource: AuthorizationResources.SOLUTION,
    action: 'update',
    possession: 'own',
  })
  @Mutation()
  updateOne(
    @Args('updateInput') updateInput: SolutionUpdateInput,
    @GraphQLRelations({ entityName: 'SolutionEntity', include: commonRelationsIncluded }) relations: string[]
  ): Promise<Solution> {
    return this.solutionService.update(updateInput, {
      relations,
    })
  }

  @UseRoles({
    resource: AuthorizationResources.SOLUTION,
    action: 'delete',
    possession: 'own',
  })
  @Mutation()
  deleteOne(@Args('deleteInput') deleteInput: SolutionDeleteInput): Promise<boolean> {
    return this.solutionService.delete(deleteInput)
  }
}
