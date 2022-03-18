import { CreateUserHandler, Controller } from '@/application/controllers'
import { CreateUserUC } from '@/domain/use-cases'
import { mockUserInput } from '@/test/application/mocks'

import { mock, MockProxy } from 'jest-mock-extended'

describe('CreateUserController', () => {
  let createUser: MockProxy<CreateUserUC>
  let sut: CreateUserHandler
  let httpRequest: any

  beforeAll(() => {
    createUser = mock()
    createUser.execute.mockResolvedValue(1)
  })

  beforeEach(() => {
    sut = new CreateUserHandler(createUser)
    httpRequest = mockUserInput()
  })

  test('should ControllerStub extends Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  test('should call CreateUserController with correct input', async () => {
    await sut.perform(httpRequest)

    expect(createUser.execute).toHaveBeenCalledWith({ name: httpRequest.name, email: httpRequest.email })
  })

  test('should return 204 on success', async () => {
    const httpResponse = await sut.perform(httpRequest)

    expect(httpResponse).toEqual({
      statusCode: 200,
      data: 1
    })
  })
})
