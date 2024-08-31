/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { TrimAndValidate } from "../validation/decorators/blank-spaces.validator";
export class CreateUserDto {

    @TrimAndValidate()
    name: string;

    @IsString()
    avatar: string;

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
