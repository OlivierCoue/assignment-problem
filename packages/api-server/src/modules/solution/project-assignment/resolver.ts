import { Args, Context, Mutation, Query, Resolver, ResolverPrefix } from '@nestjs/graphql'
import { GraphQLRelations } from '@mysg/nest-common'
import { classToPlain } from 'class-transformer'
import { UseRoles } from 'nest-access-control'
import { forwardRef, Inject } from '@nestjs/common'

import {
  ProjectAssignment,
  ProjectAssignmentCreateInput,
  ProjectAssignmentDeleteInput,
  ProjectAssignmentFindManyInput,
  ProjectAssignmentFindOneInput,
  ProjectAssignmentUpdateInput,
} from '../../../graphql/schema'
import { IGraphQLContext } from '../../../graphql/options'
import { AuthorizationResources } from '../../authorization/permission-builder'

import { ProjectAssignmentService } from './service'

const commonRelationsIncluded = ['usedInStocks']

@Resolver('ProjectAssignment')
@ResolverPrefix('ProjectAssignment_')
export class ProjectAssignmentResolver {
  constructor(
    @Inject(forwardRef(() => ProjectAssignmentService)) private readonly productService: ProjectAssignmentService
  ) {}

  @UseRoles({
    resource: AuthorizationResources.PROJECT_ASSIGNMENT,
    action: 'create',
    possession: 'any',
  })
  @Mutation()
  createOne(
    @Args('createInput') createInput: ProjectAssignmentCreateInput,
    @GraphQLRelations({ entityName: 'ProjectAssignmentEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Promise<ProjectAssignment> {
    return this.productService.create(createInput, { relations })
  }

  @UseRoles({
    resource: AuthorizationResources.PROJECT_ASSIGNMENT,
    action: 'read',
    possession: 'own',
  })
  @Query()
  findOne(
    @Args('findOneInput') findOneInput: ProjectAssignmentFindOneInput,
    @GraphQLRelations({ entityName: 'ProjectAssignmentEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Promise<ProjectAssignment | undefined> {
    return this.productService.findOne(classToPlain({ ...findOneInput, relations }))
  }

  @UseRoles({
    resource: AuthorizationResources.PROJECT_ASSIGNMENT,
    action: 'read',
    possession: 'own',
  })
  @Query()
  findMany(
    @Args('findManyInput') findManyInput: ProjectAssignmentFindManyInput,
    @GraphQLRelations({ entityName: 'ProjectAssignmentEntity', include: commonRelationsIncluded }) relations: string[],
    @Context() context: IGraphQLContext
  ): Promise<ProjectAssignment[]> {
    return this.productService.findMany(classToPlain({ ...findManyInput, relations }))
  }

  @UseRoles({
    resource: AuthorizationResources.PROJECT_ASSIGNMENT,
    action: 'update',
    possession: 'own',
  })
  @Mutation()
  updateOne(
    @Args('updateInput') updateInput: ProjectAssignmentUpdateInput,
    @GraphQLRelations({ entityName: 'ProjectAssignmentEntity', include: commonRelationsIncluded }) relations: string[]
  ): Promise<ProjectAssignment> {
    return this.productService.update(updateInput, {
      relations,
    })
  }

  @UseRoles({
    resource: AuthorizationResources.PROJECT_ASSIGNMENT,
    action: 'delete',
    possession: 'own',
  })
  @Mutation()
  deleteOne(@Args('deleteInput') deleteInput: ProjectAssignmentDeleteInput): Promise<boolean> {
    return this.productService.delete(deleteInput)
  }
}
