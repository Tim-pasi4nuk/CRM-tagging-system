import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async getUserById(userId: string): Promise<User> {
    return await this.userRepository.findOneBy({ userId });
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  public async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<void> {
    await this.userRepository.update(userId, updateUserDto);
  }

  public async deleteUserById(userId: string): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
