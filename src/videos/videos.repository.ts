import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dtos/create-video.dto';
import { UpdateVideoDto } from './dtos/update-video.dto';
import { VideoEntity } from './entities/video.entity';

@Injectable()
export class VideosRepository {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly repository: Repository<VideoEntity>,
  ) {}

  async findAll(): Promise<VideoEntity[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<VideoEntity> {
    const video = await this.repository.findOne(id);

    return video;
  }

  async create(createVideoDto: CreateVideoDto): Promise<VideoEntity> {
    const video = this.repository.create(createVideoDto);

    await this.repository.save(video);

    return video;
  }

  async update(id: string, updateVideoDto: UpdateVideoDto): Promise<void> {
    await this.repository.update(id, updateVideoDto);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
