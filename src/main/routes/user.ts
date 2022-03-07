import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { CreateUserHandler, LoadUsersHandler } from '@/application/controllers'
import { Response } from 'express'

@Controller()
export class UserRoutes {
  constructor (
    private readonly createUserHandler: CreateUserHandler,
    private readonly loadUsersHandler: LoadUsersHandler
  ) {}

  @Post()
  async create (@Body() body: CreateUserHandler.Input, @Res() res: Response): Promise<Response> {
    const { statusCode, data = {} } = await this.createUserHandler.handle(body)
    return res.status(statusCode).json({ data })
  }

  @Get()
  async load (@Body() body: CreateUserHandler.Input, @Res() res: Response): Promise<Response> {
    const { statusCode, data } = await this.loadUsersHandler.handle(body)
    return res.status(statusCode).json({ data })
  }
}
