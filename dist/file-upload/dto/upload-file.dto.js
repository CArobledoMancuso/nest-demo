"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class UploadFileDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fieldname: { required: true, type: () => String }, originalname: { required: true, type: () => String }, mimetype: { required: true, type: () => String }, size: { required: true, type: () => Number }, buffer: { required: true, type: () => Object } };
    }
}
exports.UploadFileDto = UploadFileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del campo en el formulario donde se carga el archivo',
        example: 'file',
    }),
    __metadata("design:type", String)
], UploadFileDto.prototype, "fieldname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre original del archivo cargado',
        example: 'example.jpg',
    }),
    __metadata("design:type", String)
], UploadFileDto.prototype, "originalname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo MIME del archivo cargado',
        example: 'image/jpeg',
    }),
    __metadata("design:type", String)
], UploadFileDto.prototype, "mimetype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tamaño del archivo en bytes',
        example: 123456,
    }),
    __metadata("design:type", Number)
], UploadFileDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Buffer de datos del archivo cargado',
        type: 'string',
        format: 'binary',
        example: '...binary data...',
    }),
    __metadata("design:type", Buffer)
], UploadFileDto.prototype, "buffer", void 0);
//# sourceMappingURL=upload-file.dto.js.map