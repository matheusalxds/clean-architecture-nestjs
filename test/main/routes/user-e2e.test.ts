import { AppModule } from '@/main/factories/app.module'
import { PhoneEntity, UserEntity } from '@/infra/db/pg/entities'
import { PgTestHelper } from '@/test/infra/db/pg/helper'

import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepository, Repository } from 'typeorm'
import * as request from 'supertest'

describe('/users (e2e)', () => {
  let app: INestApplication
  let pgRepo: Repository<UserEntity>

  beforeAll(async () => {
    await PgTestHelper.connect([UserEntity, PhoneEntity])
    pgRepo = getRepository(UserEntity)
  })

  beforeEach(async () => {
    PgTestHelper.restore()
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile()
    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => await PgTestHelper.disconnect())

  describe('GET', () => {
    it('/', async () => {
      await pgRepo.insert([{ email: 'any_email', name: 'any_name' }, { email: 'any_email_2', name: 'any_name_2' }])

      const { status, body } = await request(app.getHttpServer()).get('/users')

      expect(status).toBe(200)
      expect(body).toEqual([
        { id: 1, email: 'any_email', name: 'any_name' },
        { id: 2, email: 'any_email_2', name: 'any_name_2' }
      ])
    })
  })

  describe('POST', () => {
    it('/', async () => {
      const { status, body } = await request(app.getHttpServer())
        .post('/users')
        .send({ name: 'any_name', email: 'any_email' })

      expect(status).toBe(200)
      expect(body).toEqual(1)
    })
  })
})
