import { UserPgRepo } from '@/infra/db/pg/repos'

import { Module } from '@nestjs/common'

@Module({
  providers: [UserPgRepo],
  exports: [UserPgRepo]
})
export class UserReposModule {}
