import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class UserEntity implements User {

    @ApiProperty({ example: "kanto" })
    name: string;

    @ApiProperty({ example: 0 })
    id: number;

    @ApiProperty()
    email: string;

    // @ApiProperty()
    password: string;

    @ApiProperty({ example: false })
    isActive: boolean;

}