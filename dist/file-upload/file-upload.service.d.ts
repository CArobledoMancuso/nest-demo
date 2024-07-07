/// <reference types="multer" />
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
export declare class FileUploadService {
    private readonly cloudinaryService;
    private readonly productRepository;
    constructor(cloudinaryService: CloudinaryService, productRepository: Repository<Product>);
    uploadFile(file: Express.Multer.File, id: string): Promise<{
        imgUrl: string;
    }>;
}
