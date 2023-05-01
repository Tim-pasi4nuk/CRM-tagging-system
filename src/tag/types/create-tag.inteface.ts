import { User } from 'src/entities';

export interface ICreateTag {
  name: string;
  color: string;
  user: User;
}
