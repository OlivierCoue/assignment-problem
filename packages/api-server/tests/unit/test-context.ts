import { UserEntity } from '../../src/entities'
import { UserService } from '../../src/modules/user/service'

export interface ITestServices {
  userService: UserService
}

// @ts-ignore
export const testServices: ITestServices = {}

export interface ITestDataContext {
  user0: UserEntity | undefined
  user1: UserEntity | undefined
  user2: UserEntity | undefined
}

export const testContext: ITestDataContext = {
  user0: undefined,
  user1: undefined,
  user2: undefined,
}
