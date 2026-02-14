import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: true,
    type: String,
    min: [3, 'Name must be at least 3 characters long'],
    max: [30, 'Name must be at most 30 characters long'],
  })
  name: string;
  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  email: string;
  @Prop({
    required: true,
    type: String,
    min: [3, 'Password must be at least 3 characters long'],
    max: [20, 'Password must be at most 20 characters long'],
  })
  password: string;
  @Prop({
    required: true,
    type: String,
    enum: ['admin', 'user'],
  })
  role: string;
  @Prop({
    type: String,
  })
  avatar: string;
  @Prop({
    type: String,
  })
  age: string;
  @Prop({
    type: String,
  })
  phoneNumber: string;
  @Prop({
    type: String,
  })
  address: string;
  @Prop({
    type: String,
    enum: ['active', 'inactive'],
  })
  active: string;
  @Prop({
    type: String,
    enum: ['male', 'female'],
  })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
