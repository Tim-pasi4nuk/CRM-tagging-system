import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';
import { Tag } from './tag.entity';

@Entity('Order')
export class Order {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', {
    name: 'order_id',
  })
  orderId: string;

  @ApiProperty()
  @Column('varchar', {
    name: 'name',
    nullable: false,
  })
  name: string;

  @ApiProperty()
  @OneToMany(() => User, (user) => user.userId)
  user: User;

  @ApiProperty()
  @ManyToMany(() => Tag, (tag) => tag.tagId)
  @JoinTable({
    name: 'order_tag_ids',
    joinColumn: {
      name: 'order_id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
    },
  })
  tags: Tag[];
}
