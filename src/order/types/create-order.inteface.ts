import { Tag, User } from 'src/entities';

export interface ICreateOrder {
  name: string;
  user: User;
  tags: Tag[];
}
