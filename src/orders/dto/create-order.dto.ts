import {
  IsString,
  IsArray,
  IsUUID,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { Product } from 'src/products/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PartialProductDTO extends PartialType(Product) {
  @ApiProperty({
    type: String,
    description: 'El ID del producto',
    required: true,
  })
  @IsUUID()
  id: string;
}

export class CreateOrderDto {
  @ApiProperty({
    type: String,
    description: 'El ID del usuario que realiza el pedido',
    required: true,
  })
  @IsString()
  @IsUUID()
  userId: string;

  @ApiProperty({
    type: [PartialProductDTO],
    description: 'La lista de productos en el pedido',
    required: true,
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PartialProductDTO)
  products: PartialProductDTO[];
}
