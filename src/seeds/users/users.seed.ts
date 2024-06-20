import { Injectable, OnModuleInit } from '@nestjs/common';

import { usersMock } from './users-mock';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class UsersSeed implements OnModuleInit {
  constructor(private readonly userService: UserService) {}

  async onModuleInit() {
    const existingUserEmails = (await this.userService.findAll()).map(
      (user) => user.email,
    );

    for (const userData of usersMock) {
      if (!existingUserEmails.includes(userData.email)) {
        const createUserDto: CreateUserDto = {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          address: userData.address,
          phone: userData.phone,
          country: userData.country,
          city: userData.city,
          createdAt: userData.createdAt,
        };
        const createdUser = await this.userService.create(createUserDto);
        console.log('Created user:', createdUser);  // Verificar la creación de usuarios
      }
    }
  }
}
