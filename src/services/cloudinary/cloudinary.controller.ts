import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Get(':publicId')
  async getImage(@Param('publicId') publicId: string) {
    try {
      const imageUrl = await this.cloudinaryService.getUrl(publicId);
      if (!imageUrl) {
        throw new NotFoundException(`Image with ID ${publicId} not found`);
      }
      return { imageUrl };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
