import { ApiProperty } from '@nestjs/swagger';
import { Category } from "src/categories/entities/category.entity";
import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @ApiProperty({
    type: String,
    description: 'El UUID del producto, asignado por la base de datos',
    required: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    description: 'El nombre del producto',
    maxLength: 50,
    required: true,
  })
  @Column({ length: 50 })
  name: string;

  @ApiProperty({
    type: String,
    description: 'La descripción del producto',
    required: true,
  })
  @Column('text')
  description: string;

  @ApiProperty({
    type: Number,
    description: 'El precio del producto',
    required: true,
    format: 'decimal',
  })
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty({
    type: Number,
    description: 'El stock del producto',
    required: true,
  })
  @Column('int')
  stock: number;

  @ApiProperty({
    type: String,
    description: 'La URL de la imagen del producto',
    required: false,
  })
  @Column({ nullable: true })
  imgUrl: string;

  @ApiProperty({
    type: () => Category,
    description: 'La categoría a la que pertenece el producto',
    required: true,
  })
  @ManyToOne(() => Category, category => category.products)
  category: Category;

  @ApiProperty({
    type: () => OrderDetail,
    isArray: true,
    description: 'Los detalles de los pedidos que incluyen este producto',
    required: false,
  })
  @ManyToMany(() => OrderDetail, orderDetail => orderDetail.products)
  @JoinTable()
  orderDetails: OrderDetail[];
}
