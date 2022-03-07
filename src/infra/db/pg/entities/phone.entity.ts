import { UserEntity } from '@/infra/db/pg/entities'

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'

@Entity()
export class PhoneEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  number: number

  @ManyToOne(() => UserEntity, user => user.phones)
  user: UserEntity
}
