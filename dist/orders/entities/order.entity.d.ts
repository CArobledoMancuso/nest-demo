import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Order {
    id: string;
    user: User;
    date: Date;
    orderDetails: OrderDetail;
}
