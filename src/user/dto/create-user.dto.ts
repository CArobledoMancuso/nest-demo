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
    description: 'The name of the user',
    required: true,
  })
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The email of the user',
    required: true,
  })
  @MaxLength(50)
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'The password of the user',
    required: true,
  })
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
    {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character (= !@#$%^&*) and be between 8 and 15 characters long',
    },
  )
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    description: 'The address of the user',
    required: true,
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: String,
    description: 'The phone of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @ApiProperty({
    type: String,
    description: 'The country of the user',
    required: false,
  })
  @MaxLength(50)
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({
    type: String,
    description: 'The city of the user',
    required: false,
  })
  @MaxLength(50)
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({
    type: String,
    description: 'The date of creation of the user',
    required: true,
  })
  @IsString()
  @IsOptional()
  createdAt: string;
}
