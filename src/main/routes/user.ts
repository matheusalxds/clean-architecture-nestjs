import { adaptNestRouter } from '@/main/adapters'
import { CreateUserHandler, LoadUsersHandler } from '@/application/controllers'

import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { RequestHandler, Response } from 'express'

@Controller()
export class UserRoutes {
  constructor (
    private readonly createUserHandler: CreateUserHandler,
    private readonly loadUsersHandler: LoadUsersHandler
  ) {}

  @Post()
  async create (@Body() body: CreateUserHandler.Input, @Res() res: Response): Promise<RequestHandler> {
    return adaptNestRouter(this.createUserHandler)(body, res)
  }

  @Get()
  async load (@Body() body: CreateUserHandler.Input, @Res() res: Response): Promise<RequestHandler> {
    return adaptNestRouter(this.loadUsersHandler)(body, res)
  }
}
