import { UserRepository } from '@/domain/contracts/repos'
import { CreateUserUC } from '@/domain/use-cases'
import { CreateUserHandler } from '@/application/controllers'
import { mockUserInput } from '@/test/application/mocks'

import { MockProxy, mock } from 'jest-mock-extended'

describe('CreateUser UseCase', () => {
  let userRepo: MockProxy<UserRepository>
  let sut: CreateUserUC
  let userInput: CreateUserHandler.Input

  beforeAll(() => {
    userInput = mockUserInput()
    userRepo = mock()
    userRepo.create.mockResolvedValue(1)
  })

  beforeEach(() => {
    sut = new CreateUserUC(userRepo)
  })

  test('should call UserRepo with correct values', async () => {
    await sut.execute(userInput)

    expect(userRepo.create).toHaveBeenCalledWith(userInput)
  })

  test('should return 0 if UserRepo doesnt create a user', async () => {
    userRepo.create.mockResolvedValueOnce(0)

    const createAccount = await sut.execute(userInput)

    expect(createAccount).toBe(0)
  })

  test('should return 1 if UserRepo creates an user', async () => {
    const createAccount = await sut.execute(userInput)

    expect(createAccount).toBe(1)
  })
})
