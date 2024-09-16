/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto-user/create-user.dto';
import { UpdateUserDto } from '../dto-user/update-user.dto';
import { LoginUserDto } from '../dto-user/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
/* updateUser principal module */
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(@Body() userDataRegister: CreateUserDto) {
    return this.authService.register(userDataRegister);
  }

  @Post('login')
  login(@Body() userDataLogin: LoginUserDto) {
    return this.authService.login(userDataLogin);
  }

  @UseGuards(AuthGuard())
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.updateUser(+id, updateAuthDto);
  }

}
