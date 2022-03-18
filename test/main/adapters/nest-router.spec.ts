import { Controller } from '@/application/controllers'
import { adaptNestRouter } from '@/main/adapters'

import { Response } from 'express'
import { MockProxy, mock } from 'jest-mock-extended'
import { getMockRes } from '@jest-mock/express'

describe('NestRouter', () => {
  let controller: MockProxy<Controller>
  let sut: any
  let request: any
  let res: Response

  beforeAll(() => {
    request = {
      data: 'any_data'
    }
    res = getMockRes().res
    controller = mock()
    controller.handle.mockResolvedValue({
      statusCode: 200,
      data: { data: 'any_data' }
    })
  })

  beforeEach(() => { sut = adaptNestRouter(controller) })

  test('should call Controller with correct request', async () => {
    await sut(request, res)

    expect(controller.handle).toHaveBeenCalledWith({ data: 'any_data' })
    expect(controller.handle).toHaveBeenCalledTimes(1)
  })

  test('should return 200 and any data', async () => {
    await sut(request, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ data: 'any_data' })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('should return 204 and any data', async () => {
    controller.handle.mockResolvedValueOnce({
      statusCode: 204,
      data: null
    })

    await sut(request, res)

    expect(res.status).toHaveBeenCalledWith(204)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith(null)
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('should respond with 400 and valid error', async () => {
    controller.handle.mockResolvedValueOnce({
      statusCode: 400,
      data: new Error('any_error')
    })

    await sut(request, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ error: 'any_error' })
    expect(res.json).toHaveBeenCalledTimes(1)
  })

  test('should respond with 500 and valid error', async () => {
    controller.handle.mockResolvedValueOnce({
      statusCode: 500,
      data: new Error('any_error')
    })

    await sut(request, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ error: 'any_error' })
    expect(res.json).toHaveBeenCalledTimes(1)
  })
})
