import { UseCasesModule } from '@/domain/use-cases'
import { CreateUserHandler, LoadUsersHandler } from './'

import { Module } from '@nestjs/common'

@Module({
  imports: [UseCasesModule],
  exports: [CreateUserHandler, LoadUsersHandler],
  providers: [CreateUserHandler, LoadUsersHandler]
})
export class ControllerHandlersModule {}
