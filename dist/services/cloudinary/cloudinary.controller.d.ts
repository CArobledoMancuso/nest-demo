/// <reference types="multer" />
import { FileUploadService } from 'src/file-upload/file-upload.service';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadImage(id: string, file: Express.Multer.File): Promise<{
        imgUrl: string;
    }>;
}
