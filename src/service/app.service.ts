import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../model/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/CreateUserDto.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(dto: CreateUserDto) {
    return this.userModel.create(dto);
  }

  getAllUsers() {
    return this.userModel.find();
  }

  getUserById(id: string) {
    return this.userModel.findById(id);
  }

  async updateUser(newUser: CreateUserDto, id: string) {
    await this.userModel.findByIdAndUpdate(id, newUser);
    return this.userModel.findById(id);
  }

  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
