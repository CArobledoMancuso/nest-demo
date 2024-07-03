import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enum/role.enum';

@Entity()
export class User {
  @ApiProperty({
    type: String,
    description: 'El UUID del usuario, asignado por la base de datos',
    required: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    description: 'El nombre del usuario',
    required: true,
  })
  @Column({
    length: 100,
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'La contraseña del usuario',
    required: true,
  })
  @Column()
  password: string;

  @ApiProperty({
    type: String,
    description: 'El correo electrónico del usuario',
    required: true,
  })
  @Column()
  email: string;

  @ApiProperty({
    type: String,
    description: 'La dirección del usuario',
    required: true,
  })
  @Column()
  address: string;

  @ApiProperty({
    type: String,
    description: 'El teléfono del usuario',
    required: true,
  })
  @Column()
  phone: string;

  @ApiProperty({
    type: String,
    description: 'El país del usuario',
    required: false,
  })
  @Column({ nullable: true })
  country: string;

  @ApiProperty({
    type: String,
    description: 'La ciudad del usuario',
    required: false,
  })
  @Column({ nullable: true })
  city: string;

  @ApiProperty({
    type: () => Order,
    isArray: true,
    description: 'Los pedidos realizados por el usuario',
    required: false,
  })
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @ApiProperty({
    type: String,
    description: 'La fecha de creación del usuario',
    required: true,
  })
  @Column()
  createdAt: string;

  @ApiProperty({
    type: Boolean,
    description: 'Si el usuario es administrador o no',
    required: true,
    default: false,
  })
  @Column({ default: false })
  admin: boolean; // Nuevo campo
}
