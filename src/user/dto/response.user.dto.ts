import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    type: String,
    description: 'The uuid of the user, assigned by the database',
    required: true,
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'The name of the user',
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'The email of the user',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'The address of the user',
    required: true,
  })
  address: string;

  @ApiProperty({
    type: String,
    description: 'The phone of the user',
    required: true,
  })
  phone: string;

  @ApiProperty({
    type: String,
    description: 'The country of the user',
    required: false,
  })
  country?: string;

  @ApiProperty({
    type: String,
    description: 'The city of the user',
    required: false,
  })
  city?: string;

  @ApiProperty({
    type: String,
    description: 'The creation date of the user',
    required: true,
  })
  createdAt: string;

  @ApiProperty({
    type: Boolean,
    description: 'Whether the user is an admin or not',
    required: true,
  })
  admin: boolean;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
