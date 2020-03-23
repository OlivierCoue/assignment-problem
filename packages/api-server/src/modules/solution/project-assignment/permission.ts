import { AuthorizationResources, permissionsBuilder } from '../../authorization/permission-builder'
import { PermissionNames } from '../../../graphql/schema'

permissionsBuilder
  .grant(PermissionNames.PROJECT_ASSIGNMENT_CREATE_ANY)
  .createAny(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_CREATE_OWN)
  .createOwn(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_READ_ANY)
  .readAny(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_READ_OWN)
  .readAny(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_UPDATE_ANY)
  .updateAny(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_UPDATE_OWN)
  .updateOwn(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_DELETE_ANY)
  .deleteAny(AuthorizationResources.PROJECT_ASSIGNMENT)

  .grant(PermissionNames.PROJECT_ASSIGNMENT_DELETE_OWN)
  .deleteOwn(AuthorizationResources.PROJECT_ASSIGNMENT)
