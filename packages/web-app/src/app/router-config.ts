import { generatePath } from 'react-router'

/**
 *
 * @param path
 * @param params
 */
export function generateRoutePath<T extends keyof IRoutePathParams>(path: T, params: IRoutePathParams[T]) {
  return generatePath(path, params)
}

/**
 * Route paths
 */
export enum RoutePath {
  AUTH_LOGIN = '/login',

  SOLUTION_LIST = '/solutions',

  SOLUTION_DETAILS = '/solution/:solutionUuid',

  HOME = '/',
}

/**
 * Route paths params
 */
export interface IRoutePathParams {
  [RoutePath.HOME]: {}
  [RoutePath.SOLUTION_LIST]: {}
  [RoutePath.SOLUTION_DETAILS]: { solutionUuid: string }
  [RoutePath.AUTH_LOGIN]: {}
}

/**
 * Route paths params enums
 */
