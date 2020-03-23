import { forwardRef, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ProjectAssignmentEntity, SolutionEntity } from '../../entities'

import { SolutionService } from './service'
import { ProjectAssignmentService } from './project-assignment/service'
import { SolutionResolver } from './resolver'
import { ProjectAssignmentResolver } from './project-assignment/resolver'

@Module({
  imports: [forwardRef(() => TypeOrmModule.forFeature([SolutionEntity, ProjectAssignmentEntity]))],
  providers: [SolutionService, SolutionResolver, ProjectAssignmentService, ProjectAssignmentResolver],
  exports: [SolutionService],
})
export class SolutionModule {}
