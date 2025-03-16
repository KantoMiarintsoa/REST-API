import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "src/users/entities/user.entity";

export class AuthEntity {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    user: UserEntity;
}