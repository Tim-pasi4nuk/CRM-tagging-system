import { Tag } from 'src/entities';
import { FindManyOptions, In, Repository } from 'typeorm';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateTag } from './types';

export class TagRepository {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  public async createTag(createTag: ICreateTag): Promise<Tag> {
    return await this.tagRepository.save(createTag);
  }

  public async getTagsByParams(options: FindManyOptions): Promise<Tag[]> {
    return await this.tagRepository.find(options);
  }

  public async getTagsByIds(tagIds: string[]): Promise<Tag[]> {
    return await this.tagRepository.findBy({ tagId: In(tagIds) });
  }

  public async updateTag(
    tagId: string,
    updateTagDto: UpdateTagDto,
  ): Promise<Tag> {
    await this.tagRepository.update(tagId, updateTagDto);
    return await this._getTagById(tagId);
  }

  public async deleteByTagId(tagId: string): Promise<void> {
    await this.tagRepository.delete(tagId);
  }

  private async _getTagById(tagId: string): Promise<Tag> {
    return await this.tagRepository.findOneBy({ tagId });
  }
}
