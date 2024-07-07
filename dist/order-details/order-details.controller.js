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
exports.OrderDetailsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_details_service_1 = require("./order-details.service");
const create_order_detail_dto_1 = require("./dto/create-order-detail.dto");
const update_order_detail_dto_1 = require("./dto/update-order-detail.dto");
let OrderDetailsController = class OrderDetailsController {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    async create(createOrderDetailDto) {
        return await this.orderDetailsService.create(createOrderDetailDto);
    }
    findAll() {
        return this.orderDetailsService.findAll();
    }
    async findOne(id) {
        const orderDetail = await this.orderDetailsService.findOne(id);
        if (!orderDetail) {
            throw new common_1.HttpException('Order detail not found', common_1.HttpStatus.NOT_FOUND);
        }
        return orderDetail;
    }
    async update(id, updateOrderDetailDto) {
        const orderDetail = await this.orderDetailsService.findOne(id);
        if (!orderDetail) {
            throw new common_1.HttpException('Order detail not found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.orderDetailsService.update(id, updateOrderDetailDto);
    }
    async remove(id) {
        const orderDetail = await this.orderDetailsService.findOne(id);
        if (!orderDetail) {
            throw new common_1.HttpException('Order detail not found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.orderDetailsService.remove(id);
    }
};
exports.OrderDetailsController = OrderDetailsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo detalle de pedido' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'El detalle del pedido ha sido creado exitosamente',
        type: create_order_detail_dto_1.CreateOrderDetailDto,
    }),
    (0, swagger_1.ApiBody)({ type: create_order_detail_dto_1.CreateOrderDetailDto }),
    openapi.ApiResponse({ status: 201, type: require("./entities/order-detail.entity").OrderDetail }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_detail_dto_1.CreateOrderDetailDto]),
    __metadata("design:returntype", Promise)
], OrderDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los detalles de pedidos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de todos los detalles de pedidos',
        type: [create_order_detail_dto_1.CreateOrderDetailDto],
    }),
    openapi.ApiResponse({ status: 200, type: [require("./entities/order-detail.entity").OrderDetail] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un detalle de pedido por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID del detalle del pedido a obtener',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El detalle del pedido correspondiente al ID proporcionado',
        type: create_order_detail_dto_1.CreateOrderDetailDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Detalle del pedido no encontrado',
    }),
    openapi.ApiResponse({ status: 200, type: require("./entities/order-detail.entity").OrderDetail }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDetailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un detalle de pedido por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID del detalle del pedido a actualizar',
        type: String,
    }),
    (0, swagger_1.ApiBody)({ type: update_order_detail_dto_1.UpdateOrderDetailDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El detalle del pedido ha sido actualizado exitosamente',
        type: create_order_detail_dto_1.CreateOrderDetailDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Detalle del pedido no encontrado',
    }),
    openapi.ApiResponse({ status: 200, type: require("./entities/order-detail.entity").OrderDetail }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_detail_dto_1.UpdateOrderDetailDto]),
    __metadata("design:returntype", Promise)
], OrderDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un detalle de pedido por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID del detalle del pedido a eliminar',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'El detalle del pedido ha sido eliminado exitosamente',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Detalle del pedido no encontrado',
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDetailsController.prototype, "remove", null);
exports.OrderDetailsController = OrderDetailsController = __decorate([
    (0, swagger_1.ApiTags)('order-details'),
    (0, common_1.Controller)('order-details'),
    __metadata("design:paramtypes", [order_details_service_1.OrderDetailsService])
], OrderDetailsController);
//# sourceMappingURL=order-details.controller.js.map