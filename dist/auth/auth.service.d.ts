import { SignUpAuthDto } from './dto/signup-auth.dto';
import { UserService } from 'src/user/user.service';
import { SignInAuthDto } from './dto/signin-auth.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(signInUser: SignInAuthDto): Promise<{
        token: string;
    }>;
    signUp(signUpUser: SignUpAuthDto): Promise<User>;
    private createToken;
}
