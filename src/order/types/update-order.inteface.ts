import { Tag } from 'src/entities';

export interface IUpdateOrder {
  name?: string;
  tags?: Tag[];
}
