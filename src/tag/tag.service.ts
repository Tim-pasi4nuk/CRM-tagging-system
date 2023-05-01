import { HttpException, Injectable } from '@nestjs/common';
import { TagRepository } from './tag.repository';
import { Tag } from 'src/entities';
import { CreateTagDto } from './dto';
import { UserService } from 'src/user/user.service';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(
    private readonly tagRepository: TagRepository,
    private readonly userService: UserService,
  ) {}

  public async getTagByUserId(userId: string): Promise<Tag[]> {
    return await this.tagRepository.getTagsByParams({
      where: { user: { userId } },
    });
  }

  public async getTagsByIds(tagIds: string[]): Promise<Tag[]> {
    return await this.tagRepository.getTagsByIds(tagIds);
  }

  public async createTag(createTagWithUserIdDto: CreateTagDto): Promise<Tag> {
    const { userId, ...createTagDto } = createTagWithUserIdDto;
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new HttpException({ errorMessage: 'User don`t finded' }, 400);
    }
    return await this.tagRepository.createTag({ ...createTagDto, user });
  }

  public async updateTag(
    tagId: string,
    updateTagDto: UpdateTagDto,
  ): Promise<Tag> {
    return await this.tagRepository.updateTag(tagId, updateTagDto);
  }

  public async deleteTag(tagId: string): Promise<void> {
    return await this.tagRepository.deleteByTagId(tagId);
  }
}
