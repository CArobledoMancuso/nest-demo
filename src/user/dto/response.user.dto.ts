import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    type: String,
    description: 'El UUID del usuario, asignado por la base de datos',
    required: true,
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'El nombre del usuario',
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'El correo electrónico del usuario',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'La dirección del usuario',
    required: true,
  })
  address: string;

  @ApiProperty({
    type: String,
    description: 'El teléfono del usuario',
    required: true,
  })
  phone: string;

  @ApiProperty({
    type: String,
    description: 'El país del usuario',
    required: false,
  })
  country?: string;

  @ApiProperty({
    type: String,
    description: 'La ciudad del usuario',
    required: false,
  })
  city?: string;

  @ApiProperty({
    type: String,
    description: 'La fecha de creación del usuario',
    required: true,
  })
  createdAt: string;

  @ApiProperty({
    type: Boolean,
    description: 'Si el usuario es administrador o no',
    required: true,
  })
  admin: boolean;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
