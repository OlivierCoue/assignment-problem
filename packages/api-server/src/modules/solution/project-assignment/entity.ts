import { Column, Entity, ManyToOne } from 'typeorm'
import { CustomBaseEntity } from '@mysg/nest-common'

import { SolutionEntity } from '../entity'

@Entity('project_assignment')
export class ProjectAssignmentEntity extends CustomBaseEntity<ProjectAssignmentEntity> {
  @Column()
  projectName: string

  @Column()
  studentOneEmail: string

  @Column()
  studentTwoEmail: string

  @ManyToOne(() => SolutionEntity, (solution) => solution.projectAssignments)
  solution: SolutionEntity
}
