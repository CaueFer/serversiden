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
exports.ComponenteController = void 0;
const common_1 = require("@nestjs/common");
const componente_service_1 = require("../services/componente.service");
const componente_entity_1 = require("../componente.entity");
let ComponenteController = class ComponenteController {
    constructor(componenteService) {
        this.componenteService = componenteService;
    }
    async findAll() {
        return this.componenteService.findAll();
    }
    async findOne(id) {
        return this.componenteService.findOne(id);
    }
    async create(componente) {
        return this.componenteService.create(componente);
    }
    async update(id, componenteData) {
        return this.componenteService.update(id, componenteData);
    }
    async remove(id, res) {
        await this.componenteService.remove(id);
        return res.status(common_1.HttpStatus.OK).json({ message: 'Componente removido com sucesso' });
    }
};
exports.ComponenteController = ComponenteController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [componente_entity_1.Componente]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, componente_entity_1.Componente]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ComponenteController.prototype, "remove", null);
exports.ComponenteController = ComponenteController = __decorate([
    (0, common_1.Controller)('api/componentes'),
    __metadata("design:paramtypes", [componente_service_1.ComponenteService])
], ComponenteController);
//# sourceMappingURL=componente.controller.js.map