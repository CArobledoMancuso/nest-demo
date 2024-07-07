import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
export declare class ProductsSeed {
    private readonly productRepository;
    private readonly categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    findCategoryByName(category: string): Promise<Category>;
    seed(): Promise<void>;
}
