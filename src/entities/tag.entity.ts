import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Order } from './order.entity';

@Entity('Tag')
export class Tag {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', {
    name: 'tag_id',
  })
  tagId: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'color',
    nullable: false,
  })
  color: string;

  @ApiProperty()
  @ManyToMany(() => Order, (order) => order.tags, {onDelete: 'CASCADE'})
  order: Order[];

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
