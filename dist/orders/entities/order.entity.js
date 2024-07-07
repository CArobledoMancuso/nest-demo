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
exports.Order = void 0;
const openapi = require("@nestjs/swagger");
const order_detail_entity_1 = require("../../order-details/entities/order-detail.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Order = class Order {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, user: { required: true, type: () => require("../../user/entities/user.entity").User }, date: { required: true, type: () => Date }, orderDetails: { required: true, type: () => require("../../order-details/entities/order-detail.entity").OrderDetail } };
    }
};
exports.Order = Order;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único de la orden',
        type: String,
        format: 'uuid',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Usuario asociado a la orden',
        type: () => user_entity_1.User,
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.orders, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de creación de la orden',
        type: Date,
        example: '2024-07-06T12:00:00Z',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Order.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detalle de la orden asociado a la orden',
        type: () => order_detail_entity_1.OrderDetail,
    }),
    (0, typeorm_1.OneToOne)(() => order_detail_entity_1.OrderDetail, (orderDetail) => orderDetail.order, { onDelete: 'CASCADE' }),
    __metadata("design:type", order_detail_entity_1.OrderDetail)
], Order.prototype, "orderDetails", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
//# sourceMappingURL=order.entity.js.map