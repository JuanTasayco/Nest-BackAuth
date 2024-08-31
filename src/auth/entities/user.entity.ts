/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
/* schemas para probar aun en mongo que no está en el modulo */
@Schema()
export class User extends Document {
    @Prop()
    name: string;

    @Prop()
    avatar: string;

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);