import { Controller, Post, Param, UsePipes, UseGuards, HttpCode, UseInterceptors, UploadedFile, ParseUUIDPipe, BadRequestException } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { FileValidationPipe } from 'src/pipes/image-upload/image-upload.pipe';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('uploadImage/:id')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFile(new FileValidationPipe()) file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const { imgUrl } = await this.fileUploadService.uploadFile(file, id);
    return { imgUrl };
  }
}
