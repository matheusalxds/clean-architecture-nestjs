import { UserRoutes } from '@/main/routes'
import { ControllerHandlersModule } from '@/application/controllers'
import { PgTestHelper } from '@/test/infra/db/pg/helper'
import { mockUserInput } from '@/test/domain/mocks'

import { Test, TestingModule } from '@nestjs/testing'
import { getConnection } from 'typeorm'
import { Response } from 'express'
import { getMockRes } from '@jest-mock/express'

describe('UserController', () => {
  let appController: UserRoutes
  let res: Response

  beforeAll(async () => {
    await PgTestHelper.connect()
    res = getMockRes().res
  })

  beforeEach(async () => {
    PgTestHelper.restore()
    const app: TestingModule = await Test.createTestingModule({
      imports: [ControllerHandlersModule],
      controllers: [UserRoutes]
    }).compile()

    appController = app.get<UserRoutes>(UserRoutes)
  })

  afterAll(async () => await getConnection().close())

  it('should return 1 on success', async () => {
    const params = mockUserInput()

    await appController.create(params, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ data: 1 })
  })
})
