import { FindOneOptions, Repository } from 'typeorm';
import { usersEntity } from '../users.entity';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<usersEntity>);
    findAll(): Promise<usersEntity[]>;
    findOneOrFail(options: FindOneOptions<usersEntity>): Promise<usersEntity>;
    create(data: CreateUserDto): Promise<usersEntity>;
    update(id: any, data: UpdateUserDto): Promise<usersEntity>;
    destroy(id: any): Promise<void>;
}
