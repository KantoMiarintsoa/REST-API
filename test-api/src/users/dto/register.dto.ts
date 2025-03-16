import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";
import { UniqueEmail } from "src/validators/unique-email.validators";

export class RegisterUSerDto {
    @ApiProperty({ example: "Kanto", description: "name of user" })
    @IsString()
    name: string

    @ApiProperty({ example: "kanto@gmail.com", description: "email of user" })
    @IsString()
    @IsEmail({}, { message: "invalid email address" })
    @UniqueEmail()
    email: string

    @ApiProperty({ example: "kanto1234", description: "password of user" })
    @IsString()
    @Length(6, undefined, { message: "Password must be between 6 characters" })
    password: string
}

