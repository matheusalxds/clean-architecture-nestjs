import { UserPgRepo } from '@/infra/db/pg/repos'
import { PhoneEntity, UserEntity } from '@/infra/db/pg/entities'
import { PgTestHelper } from '@/test/infra/db/pg/helper'
import { mockUserInput } from '@/test/domain/mocks'

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
      const user = await pgRepo.findOne({ email: 'any_email@mail.com' })

      expect(userId).toBe(1)
      expect(user?.id).toBe(1)
    })
  })

  describe('load()', () => {
    test('should load all users', async () => {
      await pgRepo.insert({ email: 'any_email', name: 'any_name' })
      await pgRepo.insert({ email: 'any_email_2', name: 'any_name_2' })
      const users = await sut.load()

      expect(users).toHaveLength(2)
    })
  })
})
