import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';
import { Repository } from 'typeorm';
export declare class OrderDetailsService {
    private readonly orderDetailRepository;
    constructor(orderDetailRepository: Repository<OrderDetail>);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail>;
    findAll(): Promise<OrderDetail[]>;
    findOne(id: string): Promise<OrderDetail>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<OrderDetail>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findOneByOrderId(orderId: string, relations?: string[]): Promise<OrderDetail | null>;
}
