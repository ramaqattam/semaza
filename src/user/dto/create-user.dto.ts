import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @IsEmail()
  @MaxLength(50)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  @IsUrl()
  avatar: string;

  @IsNumber()
  age: number;

  @IsPhoneNumber('JO') 
  phoneNumber: string;

  @IsString()
  address: string;

  @IsBoolean()
  active: boolean;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @Length(6, 6)
  verificationCode: string;
}
