"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const role_enum_1 = require("../user/enum/role.enum");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(signInUser) {
        const user = await this.userService.findByEmail(signInUser.email);
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        const isPasswordMatching = await (0, bcrypt_1.compare)(signInUser.password, user.password);
        if (!isPasswordMatching) {
            throw new common_1.HttpException('Wrong credentials provided', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = await this.createToken(user);
        return { token };
    }
    async signUp(signUpUser) {
        if (signUpUser.password !== signUpUser.passwordConfirm) {
            throw new common_1.HttpException('Passwords do not match', 400);
        }
        signUpUser.password = await (0, bcrypt_1.hash)(signUpUser.password, 10);
        return this.userService.create(signUpUser);
    }
    async createToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
            roles: user.admin ? [role_enum_1.Role.Admin] : [role_enum_1.Role.User],
        };
        return this.jwtService.signAsync(payload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map