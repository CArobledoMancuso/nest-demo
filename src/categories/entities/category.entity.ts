
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/entities/product.entity';
import { OneToMany, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @ApiProperty({
    description: 'ID único de la categoría',
    example: 'e5d0b623-4c1b-4f8f-bd51-9d3a8b84de09',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Nombre de la categoría',
    example: 'Electronics',
    maxLength: 100,
  })
  @Column({
    length: 100,
  })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
