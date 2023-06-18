import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.user.create(createUserDto);
  }

  async findAll() {
    return this.user.find().exec();
  }

  async findOne(username: string) {
    return this.user.findOne({ username });
  }
}
