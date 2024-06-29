import { IsString, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  status?: string;

  // Agrega otras propiedades según tu entidad Order
}
