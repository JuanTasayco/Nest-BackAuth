/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuarios, UserSchema } from './entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    MongooseModule.forFeature(
      [{ name: Usuarios.name, schema: UserSchema }],
      'usuarios',
    ),
  ],
})
export class AuthModule {}
