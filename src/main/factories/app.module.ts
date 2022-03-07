import { UserModule } from '@/main/factories'

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { RouterModule } from '@nestjs/core'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({ keepConnectionAlive: true }),
    RouterModule.register([
      { path: 'users', module: UserModule }
    ]),
    UserModule
  ]
})
export class AppModule {}
