/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
/* schemas para probar aun en mongo que no está en el modulo */
@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    avatar: string;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);