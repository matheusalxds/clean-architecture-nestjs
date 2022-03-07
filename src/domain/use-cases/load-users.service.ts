import { UserPgRepo } from '@/infra/db/pg/repos'
import { Load } from '@/domain/contracts/repos'

import { Injectable } from '@nestjs/common'

@Injectable()
export class LoadUsersUC {
  constructor (private readonly userRepo: UserPgRepo) {}

  async execute (): Promise<LoadUsersUC.Output> {
    return this.userRepo.load()
  }
}

export namespace LoadUsersUC {
  export type Output = Load.Output
}
