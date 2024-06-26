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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
const common_1 = require("@nestjs/common");
const categoria_entity_1 = require("../categoria.entity");
const categoria_service_1 = require("../services/categoria.service");
let CategoriaController = class CategoriaController {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }
    async findAll() {
        return this.categoriaService.findAll();
    }
    async findOne(id) {
        return this.categoriaService.findOne(id);
    }
    async create(categoria) {
        return this.categoriaService.create(categoria);
    }
    async update(id, categoria, res) {
        const updatedCategoria = await this.categoriaService.update(id, categoria);
        return res.status(common_1.HttpStatus.OK).json(updatedCategoria);
    }
    async remove(id, res) {
        await this.categoriaService.remove(id);
        return res.status(common_1.HttpStatus.OK).json({ message: 'Categoria removida com sucesso' });
    }
};
exports.CategoriaController = CategoriaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoria_entity_1.Categoria]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, categoria_entity_1.Categoria, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "remove", null);
exports.CategoriaController = CategoriaController = __decorate([
    (0, common_1.Controller)('api/categorias'),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService])
], CategoriaController);
//# sourceMappingURL=categoria.controller.js.map