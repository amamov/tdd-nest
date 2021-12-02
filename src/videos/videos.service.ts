import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dtos/create-video.dto';
import { UpdateVideoDto } from './dtos/update-video.dto';
import { VideoEntity } from './entities/video.entity';
import { VideosRepository } from './videos.repository';

@Injectable()
export class VideosService {
  constructor(private readonly videosRepository: VideosRepository) {}

  async create(createVideoDto: CreateVideoDto): Promise<VideoEntity> {
    return this.videosRepository.create(createVideoDto);
  }

  async findAll(): Promise<VideoEntity[]> {
    return this.videosRepository.findAll();
  }

  async findById(id: string): Promise<VideoEntity | null> {
    return this.videosRepository.findById(id);
  }

  async update(id: string, updateVideoDto: UpdateVideoDto): Promise<void> {
    return this.videosRepository.update(id, updateVideoDto);
  }

  async delete(id: string): Promise<void> {
    return this.videosRepository.delete(id);
  }
}
