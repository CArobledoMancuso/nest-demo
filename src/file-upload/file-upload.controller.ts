import {
  Controller,
  Post,
  Param,
  UsePipes,
  UseGuards,
  HttpCode,
  UseInterceptors,
  UploadedFile,
  ParseUUIDPipe,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { FileUploadService } from './file-upload.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { FileValidationPipe } from 'src/pipes/image-upload/image-upload.pipe';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('file-upload') // Etiqueta para agrupar las rutas en Swagger
@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('uploadImage/:id')
  @HttpCode(200)
  @UseGuards(AuthGuard) // Protección de la ruta con un guardia de autenticación
  @UseInterceptors(FileInterceptor('file')) // Interceptor para manejar archivos
  @ApiOperation({ summary: 'Subir una imagen para un pedido específico' }) // Descripción de la operación
  @ApiParam({
    name: 'id',
    description: 'ID del pedido al que se le asociará la imagen',
    type: String,
  })
  @ApiBody({
    description: 'Imagen que se subirá',
    type: 'multipart/form-data',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Imagen subida exitosamente',
    schema: {
      type: 'object',
      properties: {
        imgUrl: {
          type: 'string',
          description: 'URL de la imagen subida',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Solicitud incorrecta, archivo no proporcionado',
  })
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
