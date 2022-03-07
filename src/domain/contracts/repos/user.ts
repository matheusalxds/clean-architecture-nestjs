import { User } from '@/domain/entities'

export interface UserRepository {
  create: (params: Create.Input) => Promise<Create.Output>
  load: () => Promise<Load.Output>
}

export namespace Create {
  export type Input = { name: string, email: string}
  export type Output = number
}

export namespace Load {
  export type Output = User[]
}
