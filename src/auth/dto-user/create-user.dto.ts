/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength } from "class-validator";
/* propiedades avanzadas para mongodb*/
export class CreateUserDto {
    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    avatar: string;

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
