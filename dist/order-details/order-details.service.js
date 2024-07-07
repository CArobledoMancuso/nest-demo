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
exports.OrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
const order_detail_entity_1 = require("./entities/order-detail.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let OrderDetailsService = class OrderDetailsService {
    constructor(orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
    }
    async create(createOrderDetailDto) {
        const orderDetail = this.orderDetailRepository.create(createOrderDetailDto);
        return this.orderDetailRepository.save(orderDetail);
    }
    async findAll() {
        return this.orderDetailRepository.find();
    }
    async findOne(id) {
        const orderDetail = await this.orderDetailRepository.findOne({ where: { id } });
        if (!orderDetail) {
            throw new common_1.NotFoundException(`Order detail with ID ${id} not found`);
        }
        return orderDetail;
    }
    async update(id, updateOrderDetailDto) {
        const orderDetail = await this.findOne(id);
        const updatedOrderDetail = this.orderDetailRepository.merge(orderDetail, updateOrderDetailDto);
        return this.orderDetailRepository.save(updatedOrderDetail);
    }
    async remove(id) {
        const orderDetail = await this.findOne(id);
        await this.orderDetailRepository.delete(id);
        return { message: 'Order detail removed successfully' };
    }
    async findOneByOrderId(orderId, relations = []) {
        return this.orderDetailRepository.findOne({
            where: { order: { id: orderId } },
            relations: relations,
        });
    }
};
exports.OrderDetailsService = OrderDetailsService;
exports.OrderDetailsService = OrderDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_detail_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderDetailsService);
//# sourceMappingURL=order-details.service.js.map