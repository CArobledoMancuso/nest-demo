import { UploadFileDto } from 'src/file-upload/dto/upload-file.dto';
export declare class CloudinaryService {
    constructor();
    uploadFile({ buffer, originalname }: UploadFileDto): Promise<string>;
    getUrl(publicId: string): Promise<string>;
}
