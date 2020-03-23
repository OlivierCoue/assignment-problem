import { UserEntity } from '../../src/entities'
import { UserService } from '../../src/modules/user/service'

export interface ITestServices {
  userService: UserService
}

// @ts-ignore
export const testServices: ITestServices = {}

export interface ITestDataContext {
  seller0: UserEntity | undefined
  seller1: UserEntity | undefined
  seller2: UserEntity | undefined
}

export const testContext: ITestDataContext = {
  seller0: undefined,
  seller1: undefined,
  seller2: undefined,
}
