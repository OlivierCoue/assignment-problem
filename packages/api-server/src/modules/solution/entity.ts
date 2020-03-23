import { Column, Entity, OneToMany } from 'typeorm'
import { CustomBaseEntity } from '@mysg/nest-common'
import { ProjectAssignmentEntity } from '../../entities'

@Entity('solution')
export class SolutionEntity extends CustomBaseEntity<SolutionEntity> {
  @Column()
  name: string

  @OneToMany(() => ProjectAssignmentEntity, (projectAssignment) => projectAssignment.solution)
  projectAssignments: ProjectAssignmentEntity[]
}
