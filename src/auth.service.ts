/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './auth/dto-user/create-user.dto';
import { UpdateUserDto } from './auth/dto-user/update-user.dto';
import * as bycript from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Usuarios } from './auth/entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuarios.name, 'usuarios') private userModel: Model<Usuarios>,
  ) {}

  async register(bodyUser: CreateUserDto) {
    if (bodyUser) {
      try {
        const saltOrRounds = 10;
        const password = await bycript.hash(bodyUser.password, saltOrRounds);
        const createUser = new this.userModel({ password, ...bodyUser });
        return await createUser.save();
      } catch (error) {
        if (error.code === 11000) {
          throw new HttpException(
            'El usuario ya existe',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        } else
          throw new HttpException(
            error.errorResponse.errmsg,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      }
    } else {
      return new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'No hay ningún parámetro',
        },
        HttpStatus.FORBIDDEN,
      );
    }
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
}
