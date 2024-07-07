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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const products_service_1 = require("../products/products.service");
const order_details_service_1 = require("../order-details/order-details.service");
const user_service_1 = require("../user/user.service");
const response_order_dto_1 = require("./dto/response-order.dto");
const order_detail_entity_1 = require("../order-details/entities/order-detail.entity");
let OrdersService = class OrdersService {
    constructor(orderRepository, userService, productService, orderDetailsService) {
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.productService = productService;
        this.orderDetailsService = orderDetailsService;
    }
    async create(createOrderDto) {
        const { userId, products } = createOrderDto;
        const user = await this.userService.findOne(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const result = await this.orderRepository.manager.transaction(async (manager) => {
            const order = manager.create(order_entity_1.Order, {
                user: user,
                date: new Date(),
            });
            const orderEntity = await manager.save(order);
            const total = await this.calculateTotal(products);
            const orderDetail = manager.create(order_detail_entity_1.OrderDetail, {
                price: total,
                products: products,
                order: orderEntity,
            });
            const orderDetailEntity = await manager.save(orderDetail);
            return new response_order_dto_1.OrderResponseDto(orderDetailEntity);
        });
        return result;
    }
    async calculateTotal(products) {
        let total = 0;
        for (const product of products) {
            total += await this.productService.buyProduct(product.id);
        }
        return total;
    }
    async findAll() {
        return this.orderRepository.find();
    }
    async findOne(id) {
        const order = await this.orderRepository.findOne({ where: { id } });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        const orderDetail = await this.orderDetailsService.findOneByOrderId(order.id, ['products', 'order']);
        return orderDetail;
    }
    async update(id, updateOrderDto) {
        const order = await this.orderRepository.findOne({ where: { id } });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        const updatedOrder = { ...order, ...updateOrderDto };
        await this.orderRepository.save(updatedOrder);
        return this.findOne(id);
    }
    async remove(id) {
        await this.orderRepository.manager.transaction(async (manager) => {
            const order = await manager.findOne(order_entity_1.Order, { where: { id }, relations: ['orderDetails'] });
            if (!order) {
                throw new common_1.NotFoundException('Order not found');
            }
            if (order.orderDetails) {
                await manager.remove(order.orderDetails);
            }
            await manager.remove(order);
        });
        return { message: 'Order removed successfully' };
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        products_service_1.ProductsService,
        order_details_service_1.OrderDetailsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map