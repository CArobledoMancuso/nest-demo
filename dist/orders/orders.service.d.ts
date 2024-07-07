import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { ProductsService } from 'src/products/products.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { UserService } from 'src/user/user.service';
import { OrderResponseDto } from './dto/response-order.dto';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly userService;
    private readonly productService;
    private readonly orderDetailsService;
    constructor(orderRepository: Repository<Order>, userService: UserService, productService: ProductsService, orderDetailsService: OrderDetailsService);
    create(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    private calculateTotal;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<OrderDetail>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<OrderDetail>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
