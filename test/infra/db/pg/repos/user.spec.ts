import { UserPgRepo } from '@/infra/db/pg/repos'
import { PhoneEntity, UserEntity } from '@/infra/db/pg/entities'
import { PgTestHelper } from '@/test/infra/db/pg/helper'
import { mockUserInput } from '@/test/application/mocks'

import { getConnection, getRepository, Repository } from 'typeorm'

describe('UserPgRepo', () => {
  let pgRepo: Repository<UserEntity>
  let sut: UserPgRepo

  beforeAll(async () => {
    await PgTestHelper.connect([UserEntity, PhoneEntity])
    pgRepo = getRepository(UserEntity)
  })

  beforeEach(async () => {
    await PgTestHelper.restore()
    sut = new UserPgRepo()
  })

  afterAll(async () => await getConnection().close())

  describe('create()', () => {
    test('should create an user', async () => {
      const userId = await sut.create(mockUserInput())
      const user = await pgRepo.findOne({ email: 'matheus.alxds@gmail.com' })

      expect(userId).toBe(1)
      expect(user?.id).toBe(1)
    })
  })

  describe('load()', () => {
    test('should load all users', async () => {
      await pgRepo.insert({ email: 'any_email@mail.com', name: 'name_1' })
      await pgRepo.insert({ email: 'any_email_2@mail.com', name: 'name_2' })
      const users = await sut.load()

      expect(users).toHaveLength(2)
    })
  })
})
