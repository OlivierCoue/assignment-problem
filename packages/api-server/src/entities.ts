import { SessionEntity } from './modules/session/entity'
import { UserEntity } from './modules/user/entity'
import { RoleEntity } from './modules/authorization/role/entity'
import { PermissionEntity } from './modules/authorization/permission/entity'
import { SolutionEntity } from './modules/solution/entity'
import { ProjectAssignmentEntity } from './modules/solution/project-assignment/entity'

export { SessionEntity, UserEntity, RoleEntity, PermissionEntity, SolutionEntity, ProjectAssignmentEntity }

export const entities = [
  SessionEntity,
  UserEntity,
  RoleEntity,
  PermissionEntity,
  SolutionEntity,
  ProjectAssignmentEntity,
]
