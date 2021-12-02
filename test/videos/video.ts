import { CreateVideoDto } from "src/videos/dtos/create-video.dto";
import { UpdateVideoDto } from "src/videos/dtos/update-video.dto";
import { VideoEntity } from "src/videos/entities/video.entity";

export const mockUpdateVideoDto = (): UpdateVideoDto => ({
  title: 'anytitle',
  url: 'anyurl'
})

export const mockCreateVideoDto = (): CreateVideoDto => ({
  title: 'anytitle',
  url: 'anyurl'
})

export const mockVideo = (): VideoEntity => ({
  id: 'anyid',
  title: 'anytitle',
  url: 'anyurl',
  created_at: new Date(),
  updated_at: new Date()
})