/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { TrimAndValidate } from "../validation/decorators/blank-spaces.validator";
export class LoginUserDto {

    @TrimAndValidate()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}
