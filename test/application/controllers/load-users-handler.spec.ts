import { LoadUsersHandler, Controller } from '@/application/controllers'
import { LoadUsersUC } from '@/domain/use-cases'
import { User } from '@/domain/entities'
import { mockUserInput } from '@/test/domain/mocks'

import { mock, MockProxy } from 'jest-mock-extended'

const mockUser = (): User => ({
  id: 1,
  ...mockUserInput()
})

describe('LoadUsersController', () => {
  let loadUsers: MockProxy<LoadUsersUC>
  let sut: LoadUsersHandler

  beforeAll(() => {
    loadUsers = mock()
    loadUsers.execute.mockResolvedValue([mockUser()])
  })

  beforeEach(() => {
    sut = new LoadUsersHandler(loadUsers)
  })

  test('should ControllerStub extends Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  test('should call LoadUsersController with correct input', async () => {
    await sut.perform()

    expect(loadUsers.execute).toHaveBeenCalled()
    expect(loadUsers.execute).toHaveBeenCalledTimes(1)
  })

  test('should return 200 on success', async () => {
    const httpResponse = await sut.perform()

    expect(httpResponse).toEqual({
      statusCode: 200,
      data: [mockUser()]
    })
  })
})
