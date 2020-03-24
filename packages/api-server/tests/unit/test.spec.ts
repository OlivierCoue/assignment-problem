import { Test } from '@nestjs/testing'
import { forwardRef, INestApplication } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { AccessControlModule } from 'nest-access-control'

import { env } from '../../src/env'
import { entities } from '../../src/entities'
import { GraphQLOptions } from '../../src/graphql/options'
import { permissionsBuilder } from '../../src/modules/authorization/permission-builder'
import { AuthModule } from '../../src/modules/auth/module'
import { AuthorizationModule } from '../../src/modules/authorization/module'
import { SessionModule } from '../../src/modules/session/module'
import { SystemModule } from '../../src/modules/system/module'
import { UserModule } from '../../src/modules/user/module'
import { MockModule } from '../../src/modules/mock/module'
import { UserService } from '../../src/modules/user/service'
import { MockService } from '../../src/modules/mock/service'
import { SolutionModule } from '../../src/modules/solution/module'

import { testServices } from './test-context'

describe('Tests', () => {
  let app: INestApplication

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        forwardRef(() =>
          TypeOrmModule.forRoot({
            keepConnectionAlive: true,
            type: 'postgres',
            host: env.postgres.host,
            port: env.postgres.port,
            username: env.postgres.username,
            password: env.postgres.password,
            database: env.postgres.database,
            schema: 'public',
            synchronize: true,
            entities,
            logging: env.isDev && ['error'],
            ssl: env.postgres.ssl,
          })
        ),
        forwardRef(() => GraphQLModule.forRoot(GraphQLOptions)),
        forwardRef(() => AccessControlModule.forRoles(permissionsBuilder)),
        forwardRef(() => AuthModule),
        forwardRef(() => AuthorizationModule),
        forwardRef(() => SessionModule),
        forwardRef(() => SystemModule),
        forwardRef(() => UserModule),
        forwardRef(() => SolutionModule),
        forwardRef(() => MockModule),
      ],
    }).compile()

    app = module.createNestApplication()
    await app.init()
    testServices.userService = app.get<UserService>(UserService)
    const mockService = app.get<MockService>(MockService)
    await mockService.resetDatabase()
  })

  require('./user')

  afterAll(async () => {
    await app.close()
  })
})
