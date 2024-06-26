import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(userName: string, password: string): Promise<import("../../app/users/users.entity").usersEntity>;
}
export {};
