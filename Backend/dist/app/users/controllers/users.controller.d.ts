import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    index(): Promise<import("../users.entity").usersEntity[]>;
    create(body: CreateUserDto): Promise<import("../users.entity").usersEntity>;
    show(id: string): Promise<import("../users.entity").usersEntity>;
    update(id: string, body: UpdateUserDto): Promise<import("../users.entity").usersEntity>;
    destroy(id: string): Promise<void>;
}
