import { forwardRef, Module } from '@nestjs/common'

import { AuthorizationModule } from '../authorization/module'
import { UserModule } from '../user/module'

import { MockResolver } from './resolver'
import { MockService } from './service'
import { MockController } from './controller'

@Module({
  imports: [
    forwardRef(() => AuthorizationModule),
    forwardRef(() => UserModule),
  ],
  providers: [MockResolver, MockService, MockController],
  exports: [],
})
export class MockModule {}
