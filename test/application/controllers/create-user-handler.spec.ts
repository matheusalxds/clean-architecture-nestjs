import { CreateUserHandler, Controller } from '@/application/controllers'
import { CreateUserUC } from '@/domain/use-cases'

import { mock, MockProxy } from 'jest-mock-extended'

const mockHttpRequest = () => ({ email: 'matheus.silva@gaivota.ai', name: 'Matheus' })

describe('CreateUserController', () => {
  let createUser: MockProxy<CreateUserUC>
  let sut: CreateUserHandler

  beforeAll(() => {
    createUser = mock()
    createUser.execute.mockResolvedValue(1)
  })

  beforeEach(() => {
    sut = new CreateUserHandler(createUser)
  })

  test('should ControllerStub extends Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  test('should call CreateUserController with correct input', async () => {
    const httpRequest = mockHttpRequest()

    await sut.perform(httpRequest)

    expect(createUser.execute).toHaveBeenCalledWith({ name: httpRequest.name, email: httpRequest.email })
  })

  test('should return 204 on success', async () => {
    const httpRequest = mockHttpRequest()

    const httpResponse = await sut.perform(httpRequest)

    expect(httpResponse).toEqual({
      statusCode: 200,
      data: 1
    })
  })
})
