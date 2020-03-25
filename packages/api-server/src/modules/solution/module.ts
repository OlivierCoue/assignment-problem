import { forwardRef, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ProjectAssignmentEntity, SolutionEntity } from '../../entities'

import { SolutionService } from './service'
import { SolutionResolver } from './resolver'

@Module({
  imports: [forwardRef(() => TypeOrmModule.forFeature([SolutionEntity, ProjectAssignmentEntity]))],
  providers: [SolutionService, SolutionResolver],
  exports: [SolutionService],
})
export class SolutionModule {}
