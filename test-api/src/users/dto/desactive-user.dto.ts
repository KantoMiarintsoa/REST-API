import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class DesactiveUserDTO {
    @IsBoolean()
    @ApiProperty({ example: true, description: "this user is deactiveted" })
    isActive: Boolean
}