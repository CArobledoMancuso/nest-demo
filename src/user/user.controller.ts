import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  UseInterceptors,
  Req,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { DateAdderInterceptor } from 'src/interceptors/date-adder/date-adder.interceptor';
import { Roles } from 'src/decorator/roles/roles.decorator';
import { Role } from './enum/role.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/response.user.dto';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('admin')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getAdmin() {
    return 'This route is for admin only';
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(DateAdderInterceptor)
  async create(@Body() createUserDto: CreateUserDto, @Req() request) {
    const user = { ...createUserDto, createdAt: request.date };
    const createdUser = await this.userService.create(user);
    return { id: createdUser.id };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async findAll() {
    const users = await this.userService.findAll();
    return users.map(user => {
      const { password, ...rest } = user;
      return new UserResponseDto(rest);
    });
  }

  @Get('pag')
  @HttpCode(HttpStatus.OK)
  async findWithPagination(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    const users = await this.userService.pag(page, limit);
    return users.map(user => {
      const { password, ...rest } = user;
      return new UserResponseDto(rest);
    });
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.userService.findOne(id);
    const { password, ...rest } = user;
    return new UserResponseDto(rest);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.update(id, updateUserDto);
    return { id: updatedUser.id };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    const deletedUser = await this.userService.remove(id);
    return { id: deletedUser.id };
  }
}
