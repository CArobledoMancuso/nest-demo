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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const signup_auth_dto_1 = require("./dto/signup-auth.dto");
const signin_auth_dto_1 = require("./dto/signin-auth.dto");
const date_adder_interceptor_1 = require("../interceptors/date-adder/date-adder.interceptor");
const response_user_dto_1 = require("../user/dto/response.user.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(credentials) {
        return this.authService.signIn(credentials);
    }
    async signUp(signUpUser, request) {
        const user = { ...signUpUser, createdAt: request.date };
        const newUser = await this.authService.signUp(user);
        return new response_user_dto_1.UserResponseDto(newUser);
    }
    getAuth0Protected(request) {
        console.log(JSON.stringify(request.oidc.idToken));
        return JSON.stringify(request.oidc.user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signin'),
    (0, swagger_1.ApiOperation)({ summary: 'Iniciar sesión de usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Inicio de sesión exitoso',
        type: response_user_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Credenciales inválidas' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_auth_dto_1.SignInAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar un nuevo usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Registro exitoso de usuario',
        type: response_user_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al registrar usuario' }),
    (0, common_1.UseInterceptors)(date_adder_interceptor_1.DateAdderInterceptor),
    openapi.ApiResponse({ status: 201, type: require("../user/dto/response.user.dto").UserResponseDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_auth_dto_1.SignUpAuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Get)('auth0/protected'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener información de usuario desde Auth0' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Información de usuario obtenida',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getAuth0Protected", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map