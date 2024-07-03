import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'El nombre del producto',
    maxLength: 50,
    required: true,
  })
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'La descripción del producto',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    type: Number,
    description: 'El precio del producto',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    type: Number,
    description: 'El stock del producto',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty({
    type: String,
    description: 'La URL de la imagen del producto',
    required: false,
  })
  @IsString()
  @IsOptional()
  imgUrl?: string;
}
