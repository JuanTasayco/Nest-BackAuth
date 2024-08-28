/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
/* partial create dto*/
export class UpdateUserDto extends PartialType(CreateUserDto) { }
