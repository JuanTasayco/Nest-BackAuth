/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto-user/create-user.dto';
import { UpdateUserDto } from './dto-user/update-user.dto';
/* updateUser principal module */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(@Body() userDataRegister: CreateUserDto) {
    return this.authService.register(userDataRegister);
  }

  @Post('login')
  login(@Body() userDataLogin: CreateUserDto) {
    return this.authService.login(userDataLogin);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.updateUser(+id, updateAuthDto);
  }

}
