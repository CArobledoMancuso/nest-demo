import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/response.user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAllAdmins(): Promise<UserResponseDto[]>;
    findAll(): Promise<UserResponseDto[]>;
    findWithPagination(page?: number, limit?: number): Promise<UserResponseDto[]>;
    findOne(id: string): Promise<UserResponseDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
    }>;
    assignAdminRole(id: string): Promise<{
        id: string;
        admin: boolean;
    }>;
}
