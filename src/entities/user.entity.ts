import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Tag } from './tag.entity';

@Entity('User')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  userId: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'first_name',
    nullable: false,
  })
  firstName: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'last_name',
    nullable: false,
  })
  lastName: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'email',
    nullable: false,
  })
  email: string;

  @ApiProperty()
  @OneToMany(() => Tag, (tag) => tag.user)
  tags: Tag[];

  @ApiProperty()
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
