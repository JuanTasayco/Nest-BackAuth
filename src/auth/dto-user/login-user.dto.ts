/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { TrimAndValidate } from "../validation/decorators/blank-spaces.validator";
export class LoginUserDto {

    @TrimAndValidate()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}
