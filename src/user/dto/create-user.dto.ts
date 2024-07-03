import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'El nombre del usuario',
    required: true,
  })
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'El correo electrónico del usuario',
    required: true,
  })
  @MaxLength(50)
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'La contraseña del usuario',
    required: true,
  })
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
    {
      message:
        'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número, un carácter especial (= !@#$%^&*) y tener entre 8 y 15 caracteres',
    },
  )
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    description: 'La dirección del usuario',
    required: true,
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: String,
    description: 'El teléfono del usuario',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @ApiProperty({
    type: String,
    description: 'El país del usuario',
    required: false,
  })
  @MaxLength(50)
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({
    type: String,
    description: 'La ciudad del usuario',
    required: false,
  })
  @MaxLength(50)
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({
    type: String,
    description: 'La fecha de creación del usuario',
    required: true,
  })
  @IsString()
  @IsOptional()
  createdAt: string;
}
