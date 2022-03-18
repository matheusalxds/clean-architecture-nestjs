import { UserPgRepo } from '@/infra/db/pg/repos'
import { Create } from '@/domain/contracts/repos'

import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUserUC {
  constructor (private readonly userRepo: UserPgRepo) {}

  async execute (input: CreateUserUC.Input): Promise<CreateUserUC.Output> {
    return this.userRepo.create(input)
  }
}

export namespace CreateUserUC {
  export type Input = Create.Input
  export type Output = Create.Output
}
