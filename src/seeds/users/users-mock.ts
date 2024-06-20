import { User } from "src/user/entities/user.entity";

export const usersMock: Partial<User>[] = [
    {
      id: '1e34a0d2-5d55-4d8b-9b2f-1dc82a8f5b1a',
      name: 'User 1',
      email: 'user1@example.com',
      password: 'Password1!',
      address: 'Address 1',
      phone: '1234567890',
      country: 'Country 1',
      city: 'City 1',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2b22e0c9-7c3f-4aef-9a1c-03baf4a08957',
      name: 'User 2',
      email: 'user2@example.com',
      password: 'Password2!',
      address: 'Address 2',
      phone: '0987654321',
      country: 'Country 2',
      city: 'City 2',
      createdAt: new Date().toISOString(),
    },
  ];