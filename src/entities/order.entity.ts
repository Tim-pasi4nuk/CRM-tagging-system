import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('Order')
export class Order {
  @PrimaryGeneratedColumn('uuid', {
    name: 'order_id',
  })
  orderId: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @OneToMany(() => User, (user) => user.userId)
  user: User;
}
