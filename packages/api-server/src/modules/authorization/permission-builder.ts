import { RolesBuilder } from 'nest-access-control'

export const permissionsBuilder: RolesBuilder = new RolesBuilder()

export enum AuthorizationResources {
  ROLE = 'ROLE',
  USER = 'USER',
  SOLUTION = 'SOLUTION',
  PROJECT_ASSIGNMENT = 'PROJECT_ASSIGNMENT',
  PROJECT = 'PROJECT',
  STUDENT = 'STUDENT',
}
