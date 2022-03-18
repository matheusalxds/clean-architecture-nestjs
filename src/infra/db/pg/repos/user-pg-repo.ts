import { Create, Load, UserRepository } from '@/domain/contracts/repos'
import { UserEntity } from '@/infra/db/pg/entities'

import { Injectable } from '@nestjs/common'
import { getRepository } from 'typeorm'

@Injectable()
export class UserPgRepo implements UserRepository {
  async create (params: Create.Input): Promise<Create.Output> {
    const pgRepo = getRepository(UserEntity)
    const inserted = await pgRepo.insert(params)
    const [newUser] = inserted.generatedMaps
    return newUser.id
  }

  async load (): Promise<Load.Output> {
    const pgRepo = getRepository(UserEntity)
    return pgRepo.find()
  }
}
