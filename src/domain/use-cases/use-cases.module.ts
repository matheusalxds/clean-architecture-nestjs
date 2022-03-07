import { CreateUserUC, LoadUsersUC } from '@/domain/use-cases'
import { UserReposModule } from '@/infra/db/pg/repos'

import { Module } from '@nestjs/common'

@Module({
  imports: [UserReposModule],
  providers: [CreateUserUC, LoadUsersUC],
  exports: [CreateUserUC, LoadUsersUC]
})
export class UseCasesModule {}
