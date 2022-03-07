import { ControllerHandlersModule } from '@/application/controllers'
import { UserRoutes } from '@/main/routes'

import { Module } from '@nestjs/common'

@Module({
  imports: [ControllerHandlersModule],
  controllers: [UserRoutes]
})
export class UserModule {}
