import { CreateUserHandler } from '@/application/controllers'

export const mockUserInput = (): CreateUserHandler.Input => ({
  email: 'matheus.alxds@gmail.com',
  name: 'Matheus Alexandre'
})
