import { ServerError } from '@/application/errors'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  data: new ServerError(error)
})

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})
