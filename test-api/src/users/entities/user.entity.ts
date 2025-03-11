import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class UserEntity implements User {

    @ApiProperty()
    name: string;

    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;

    // @ApiProperty()
    password: string;

    @ApiProperty({ example: false })
    isActive: boolean;

}