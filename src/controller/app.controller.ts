import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { CreateUserDto } from '../dto/CreateUserDto.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.appService.create(dto);
  }

  @Get()
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.appService.getUserById(id);
  }

  @Put(':id')
  updateUser(@Body() newUser: CreateUserDto, @Param('id') id: string) {
    return this.appService.updateUser(newUser, id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }

  //TODO crud for users and arch
}
