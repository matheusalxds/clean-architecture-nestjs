import { PhoneEntity } from '@/infra/db/pg/entities'

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @OneToMany(() => PhoneEntity, phone => phone.user)
  phones: PhoneEntity[]
}
