/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
/* propiedades avanzadas para mongodb*/
export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'La cadena no debe estar vacía' })
    name: string;

    @IsString()
    avatar: string;

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
