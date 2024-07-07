import { Product } from 'src/products/entities/product.entity';
declare const PartialProductDTO_base: import("@nestjs/mapped-types").MappedType<Partial<Product>>;
export declare class PartialProductDTO extends PartialProductDTO_base {
    id: string;
}
export declare class CreateOrderDto {
    userId: string;
    products: PartialProductDTO[];
}
export {};
