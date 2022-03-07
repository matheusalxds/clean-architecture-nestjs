import { ok } from '@/application/helpers'
import { LoadUsersUC } from '@/domain/use-cases'
import { Controller } from '@/application/controllers'

import { Injectable } from '@nestjs/common'

@Injectable()
export class LoadUsersHandler extends Controller {
  constructor (private readonly loadUsersUC: LoadUsersUC) {
    super()
  }

  async perform (): Promise<Controller.Output> {
    const httpResponse = await this.loadUsersUC.execute()
    return ok(httpResponse)
  }
}
