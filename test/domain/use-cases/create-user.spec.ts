import { UserRepository } from '@/domain/contracts/repos'
import { CreateUserUC } from '@/domain/use-cases'

import { MockProxy, mock } from 'jest-mock-extended'

describe('CreateUser UseCase', () => {
  let userRepo: MockProxy<UserRepository>
  let sut: CreateUserUC

  beforeAll(() => {
    userRepo = mock()
    userRepo.create.mockResolvedValue(1)
  })

  beforeEach(() => {
    sut = new CreateUserUC(userRepo)
  })

  test('should call UserRepo with correct values', async () => {
    await sut.execute({ name: 'Matheus', email: 'matheus.silva@gaivota.ai' })

    expect(userRepo.create).toHaveBeenCalledWith({ name: 'Matheus', email: 'matheus.silva@gaivota.ai' })
  })

  test('should return false if UserRepo returns false', async () => {
    userRepo.create.mockResolvedValueOnce(0)

    const createAccount = await sut.execute({ name: 'Matheus', email: 'matheus.silva@gaivota.ai' })

    expect(createAccount).toBe(0)
  })

  test('should return 1 if UserRepo returns 1', async () => {
    const createAccount = await sut.execute({ name: 'Matheus', email: 'matheus.silva@gaivota.ai' })

    expect(createAccount).toBe(1)
  })
})
