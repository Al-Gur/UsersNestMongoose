import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './CreateUserDto.dto';

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
  //TODO crud for users and arch
}
