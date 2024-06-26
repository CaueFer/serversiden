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
exports.EquipamentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const equipamento_entity_1 = require("../equipamento.entity");
let EquipamentoService = class EquipamentoService {
    constructor(equipamentoRepository) {
        this.equipamentoRepository = equipamentoRepository;
    }
    async findAll() {
        try {
            const equipamentos = await this.equipamentoRepository.find({
                relations: ['componentes'],
            });
            if (equipamentos.length === 0)
                return null;
            return equipamentos;
        }
        catch (error) {
            console.error('Erro ao buscar equipamentos:', error);
            throw new Error('Erro ao buscar equipamentos');
        }
    }
    async findOne(id) {
        return this.equipamentoRepository.findOne({
            where: { id },
            relations: ['componentes'],
        });
    }
    async create(equipamento) {
        return this.equipamentoRepository.save(equipamento);
    }
    async update(id, equipamentoData) {
        const componente = await this.findOne(id);
        if (!componente) {
            throw new common_1.NotFoundException(`Equipamento com id ${id} não encontrado`);
        }
        componente.nome = equipamentoData.nome;
        componente.componentes = equipamentoData.componentes;
        return await this.equipamentoRepository.save(componente);
    }
    async remove(id) {
        await this.equipamentoRepository.delete(id);
    }
};
exports.EquipamentoService = EquipamentoService;
exports.EquipamentoService = EquipamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(equipamento_entity_1.Equipamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EquipamentoService);
//# sourceMappingURL=equipamento.service.js.map