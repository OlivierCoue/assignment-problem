import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common'
import { getConnection } from 'typeorm'

import { RoleService } from '../authorization/role/service'
import { UserService } from '../user/service'

import { users } from './data/users'

@Injectable()
export class MockService {
  constructor(
    @Inject(forwardRef(() => RoleService)) private readonly roleService: RoleService,
    @Inject(forwardRef(() => UserService)) private readonly userService: UserService
  ) {}

  async resetDatabase() {
    try {
      const connection = getConnection()
      Logger.log('DATABASE DROPPED')
      await connection.dropDatabase()
      await connection.synchronize()
      Logger.log('SCHEMA CREATED')
      await this.roleService.onModuleInit()
    } catch (err) {
      throw new Error(`ERROR: Cleaning test db: ${err}`)
    }
  }

  async createUsers() {
    await Promise.all(users.map((user) => this.userService.create(user)))
  }

  getRandomInt(min: number, max: number): number {
    return min + Math.floor(Math.random() * Math.floor(max))
  }

  async createMock() {
    Logger.log('STARTING MOCK')
    await this.resetDatabase()
    await this.createUsers()
    Logger.log('MOCK FINISHED')
  }
}
