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
exports.EquipamentoController = void 0;
const common_1 = require("@nestjs/common");
const equipamento_service_1 = require("../services/equipamento.service");
const equipamento_entity_1 = require("../equipamento.entity");
let EquipamentoController = class EquipamentoController {
    constructor(equipamentoService) {
        this.equipamentoService = equipamentoService;
    }
    async findAll(res) {
        try {
            const result = await this.equipamentoService.findAll();
            if (!result) {
                return res.status(common_1.HttpStatus.OK).json({ message: "Nenhum equipamento cadastrado!" });
            }
            res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            console.error('Erro ao buscar equipamentos:', error.message);
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao buscar equipamentos' });
        }
    }
    async findOne(id) {
        return this.equipamentoService.findOne(id);
    }
    async create(equipamento) {
        return this.equipamentoService.create(equipamento);
    }
    async update(id, equipamentoData) {
        return this.equipamentoService.update(id, equipamentoData);
    }
    async remove(id, res) {
        await this.equipamentoService.remove(id);
        return res.status(common_1.HttpStatus.OK).json({ message: 'Equipamento removido com sucesso' });
    }
};
exports.EquipamentoController = EquipamentoController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [equipamento_entity_1.Equipamento]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, equipamento_entity_1.Equipamento]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EquipamentoController.prototype, "remove", null);
exports.EquipamentoController = EquipamentoController = __decorate([
    (0, common_1.Controller)('api/equipamentos'),
    __metadata("design:paramtypes", [equipamento_service_1.EquipamentoService])
], EquipamentoController);
//# sourceMappingURL=equipamento.controller.js.map