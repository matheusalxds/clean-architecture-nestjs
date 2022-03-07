import { HttpResponse, serverError } from '@/application/helpers'

export abstract class Controller {
  abstract perform (input: any): Promise<HttpResponse>

  async handle (input: any): Promise<Controller.Output> {
    try {
      return await this.perform(input)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

export namespace Controller {
  export type Output = HttpResponse
}
