import { ApiProperty, PartialType } from "@nestjs/swagger";
import { RegisterUSerDto } from "./register.dto";
import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class UpdateUserDTO extends PartialType(RegisterUSerDto) {
    @Exclude()
    email?: string;

    @ApiProperty({ example: "kanto12", description: "new password" })
    @ValidateIf(body => body.password !== undefined && body.password !== null)
    @IsString()
    @IsNotEmpty()
    oldPassword: string

}