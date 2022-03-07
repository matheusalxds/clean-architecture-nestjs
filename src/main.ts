import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/main/factories'

async function bootstrap () {
  const app = await NestFactory.create(AppModule, { })
  await app.listen(3000)
}

bootstrap()
  .catch(e => console.log('error', e))
