import { Order } from 'src/orders/entities/order.entity';
export declare class User {
    id: string;
    name: string;
    password: string;
    email: string;
    address: string;
    phone: string;
    country: string;
    city: string;
    orders: Order[];
    createdAt: string;
    admin: boolean;
}
