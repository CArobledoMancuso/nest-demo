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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const order_entity_1 = require("../../orders/entities/order.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, password: { required: true, type: () => String }, email: { required: true, type: () => String }, address: { required: true, type: () => String }, phone: { required: true, type: () => String }, country: { required: true, type: () => String }, city: { required: true, type: () => String }, orders: { required: true, type: () => [require("../../orders/entities/order.entity").Order] }, createdAt: { required: true, type: () => String }, admin: { required: true, type: () => Boolean } };
    }
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'El UUID del usuario, asignado por la base de datos',
        required: true,
        example: 'a5f5e2c4-b27b-42d2-bd39-9d4d6f1b7c70',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'El nombre del usuario',
        required: true,
        example: 'Juan Pérez',
    }),
    (0, typeorm_1.Column)({
        length: 100,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'La contraseña del usuario',
        required: true,
        example: 'Password123!',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'El correo electrónico del usuario',
        required: true,
        example: 'juan.perez@example.com',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'La dirección del usuario',
        required: true,
        example: 'Calle Falsa 123, Ciudad',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'El teléfono del usuario',
        required: true,
        example: '+1234567890',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'El país del usuario',
        required: false,
        example: 'España',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'La ciudad del usuario',
        required: false,
        example: 'Madrid',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => order_entity_1.Order,
        isArray: true,
        description: 'Los pedidos realizados por el usuario',
        required: false,
    }),
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.user),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'La fecha de creación del usuario',
        required: true,
        example: '2024-07-06T12:34:56Z',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        description: 'Si el usuario es administrador o no',
        required: true,
        default: false,
        example: false,
    }),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "admin", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map