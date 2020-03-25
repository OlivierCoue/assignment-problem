import { PermissionNames } from '../../../../graphql/schema'

export const defaultRoles: { [key: string]: PermissionNames[] } = {
  user: [PermissionNames.ROLE_READ_OWN, PermissionNames.USER_READ_OWN, PermissionNames.USER_UPDATE_OWN],
  admin: [
    PermissionNames.ROLE_CREATE_ANY,
    PermissionNames.ROLE_READ_ANY,
    PermissionNames.ROLE_UPDATE_ANY,
    PermissionNames.ROLE_DELETE_ANY,

    PermissionNames.USER_CREATE_ANY,
    PermissionNames.USER_READ_ANY,
    PermissionNames.USER_UPDATE_ANY,
    PermissionNames.USER_DELETE_ANY,

    PermissionNames.SOLUTION_CREATE_ANY,
    PermissionNames.SOLUTION_READ_ANY,
    PermissionNames.SOLUTION_UPDATE_ANY,
    PermissionNames.SOLUTION_DELETE_ANY,
  ],
}
