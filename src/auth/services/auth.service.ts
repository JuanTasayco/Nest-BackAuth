/* eslint-disable prettier/prettier */
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto-user/create-user.dto';
import { UpdateUserDto } from '../dto-user/update-user.dto';
import * as bycript from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { LoginUserDto } from '../dto-user/login-user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  async register(bodyUser: CreateUserDto) {
    if (bodyUser) {
      try {
        const saltOrRounds = 10;
        bodyUser.password = await bycript.hash(bodyUser.password, saltOrRounds);
        const createUser = new this.userModel(bodyUser);
        const usuarioCreado = await createUser.save();
        return usuarioCreado;
      } catch (error) {
        if (error.code === 11000) {
          throw new HttpException('El usuario ya existe', HttpStatus.INTERNAL_SERVER_ERROR)
        } else
          throw new HttpException(error.errorResponse.errmsg, HttpStatus.INTERNAL_SERVER_ERROR)
      }
    } else {
      return new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'No hay ningún parámetro'
      }, HttpStatus.FORBIDDEN)
    }
  }

  async login(bodyUser: LoginUserDto) {
    try {
      const dbUserConsult = await this.userModel.findOne({ username: bodyUser.username })

      if (bycript.compareSync(bodyUser.password, dbUserConsult.password)) {
        const token = this.generateJwt({ username: dbUserConsult.username, password: dbUserConsult.password });
        /* to object permite entregar un archivo de js plano, y no los metadatos adicionales que trae mongoose */
        return { ...dbUserConsult.toObject(), token };
      } else {
        return new BadRequestException('La contraseña o el usuario no son correctos').getResponse()
      }

    } catch (error) {
      return error;
    }
  }

  private generateJwt(payload: any) {
    /* firmar con este contenido (payload)*/
    const token = this.jwtService.sign(payload);
    return token;
  }


  updateUser(id: number, updateAuthDto: UpdateUserDto) {
    return 'Entrada exitosa';
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  constructor(
    @InjectModel(User.name, 'users') private userModel: Model<User>,
    private configService: ConfigService,
    private jwtService: JwtService
  ) { }

}
