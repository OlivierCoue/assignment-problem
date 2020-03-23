import { AuthorizationResources, permissionsBuilder } from '../authorization/permission-builder'
import { PermissionNames } from '../../graphql/schema'

permissionsBuilder
  .grant(PermissionNames.SOLUTION_CREATE_ANY)
  .createAny(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_CREATE_OWN)
  .createOwn(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_READ_ANY)
  .readAny(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_READ_OWN)
  .readAny(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_UPDATE_ANY)
  .updateAny(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_UPDATE_OWN)
  .updateOwn(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_DELETE_ANY)
  .deleteAny(AuthorizationResources.SOLUTION)

  .grant(PermissionNames.SOLUTION_DELETE_OWN)
  .deleteOwn(AuthorizationResources.SOLUTION)
