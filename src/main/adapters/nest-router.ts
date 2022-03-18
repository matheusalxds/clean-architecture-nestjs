import { Controller } from '@/application/controllers'

type Adapter = (controller: Controller) => any

export const adaptNestRouter: Adapter = (controller: Controller) => async (body, res) => {
  const { statusCode, data = {} } = await controller.handle(body)
  const json = [200, 204].includes(statusCode) ? data : { error: data.message }
  return res.status(statusCode).json(json)
}
