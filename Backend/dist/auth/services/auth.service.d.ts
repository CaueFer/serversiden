import { usersEntity } from 'src/app/users/users.entity';
import { UsersService } from 'src/app/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(userName: string, password: string): Promise<usersEntity>;
    login(user: usersEntity): Promise<{
        token: string;
    }>;
}
