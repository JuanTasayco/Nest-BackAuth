/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto-user/create-user.dto';
import { UpdateUserDto } from './dto-user/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {

  register(bodyUser: CreateUserDto) {

    return { ...bodyUser, type: 'register' };
  }

  login(bodyUser: CreateUserDto) {
    return { ...bodyUser, type: 'login' };
  }

  updateUser(id: number, updateAuthDto: UpdateUserDto) {
    console.log(updateAuthDto);
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  /* */
  constructor() { }

}
