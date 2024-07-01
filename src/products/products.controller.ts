import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Put,
  Query,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly fileUploadService: FileUploadService,
  ) {}

  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @HttpCode(200)
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.productsService.findAll(page, limit);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProductDto: Partial<UpdateProductDto>,
  ) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    const updateProduct = await this.productsService.update(
      id,
      updateProductDto as UpdateProductDto,
    );

    return updateProduct;
  }

  @Delete(':id')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return this.productsService.remove(id);
  }

  // @Post('/files/uploadImage/:id')
  // @HttpCode(200)
  // @UseGuards(AuthGuard)
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @UploadedFile(new ImageUploadPipe()) file: Express.Multer.File,
  // ) {
  //   console.log(file); // Añadir log para depurar
  //   return this.productsService.uploadFile(file, id);
  // }

  // @Get(':id/image')
  // @HttpCode(200)
  // @UseGuards(AuthGuard)
  // async getImage(@Param('id', new ParseUUIDPipe()) id: string) {
    
  //   return this.fileUploadService.getUrl(id);
  // }
}
