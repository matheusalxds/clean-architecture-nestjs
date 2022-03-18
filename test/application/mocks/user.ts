import { CreateUserHandler } from '@/application/controllers'

export const mockUserInput = (): CreateUserHandler.Input => ({
  email: 'any_email@mail.com',
  name: 'any_name'
})
