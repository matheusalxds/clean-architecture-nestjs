import { UserRepository } from '@/domain/contracts/repos'
import { LoadUsersUC } from '@/domain/use-cases'

import { MockProxy, mock } from 'jest-mock-extended'

describe('CreateUser UseCase', () => {
  let userRepo: MockProxy<UserRepository>
  let sut: LoadUsersUC

  beforeAll(() => {
    userRepo = mock()
    userRepo.load.mockResolvedValue([{ id: 1, email: 'any_email', name: 'any_name' }])
  })

  beforeEach(() => {
    sut = new LoadUsersUC(userRepo)
  })

  test('should call UserRepo', async () => {
    await sut.execute()

    expect(userRepo.load).toHaveBeenCalled()
    expect(userRepo.load).toHaveBeenCalledTimes(1)
  })

  test('should return an empty array if UserRepo returns an empty array', async () => {
    userRepo.load.mockResolvedValueOnce([])

    const createAccount = await sut.execute()

    expect(createAccount).toEqual([])
  })

  test('should return 1 if UserRepo returns 1', async () => {
    const users = await sut.execute()

    expect(users).toEqual([{ id: 1, email: 'any_email', name: 'any_name' }]);
  })
})
