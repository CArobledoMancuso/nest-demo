import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
export declare class OrderDetailsController {
    private readonly orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<import("./entities/order-detail.entity").OrderDetail>;
    findAll(): Promise<import("./entities/order-detail.entity").OrderDetail[]>;
    findOne(id: string): Promise<import("./entities/order-detail.entity").OrderDetail>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("./entities/order-detail.entity").OrderDetail>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
