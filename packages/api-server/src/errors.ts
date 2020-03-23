import { authError } from './modules/auth/error'
import { permissionError } from './modules/authorization/permission/error'
import { userError } from './modules/user/error'
import { solutionError } from './modules/solution/error'
import { projectAssignmentError } from './modules/solution/project-assignment/error'

export interface IErrorData {
  message?: string
}

const appError = {
  ENTITY_NOT_FOUND: {},
}

export const errors = Object.assign(
  {},
  appError,
  authError,
  userError,
  permissionError,
  solutionError,
  projectAssignmentError
)

export function findErrorData(name: keyof typeof errors): IErrorData {
  return errors[name] || {}
}
