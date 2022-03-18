import { mockUserInput } from '@/test/application/mocks'
import { User } from '@/domain/entities'

export const mockUser = (): User => ({ id: 1, ...mockUserInput() })
