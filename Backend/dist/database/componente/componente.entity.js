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
exports.Componente = void 0;
const typeorm_1 = require("typeorm");
const categoria_entity_1 = require("../categoria/categoria.entity");
const equipamento_entity_1 = require("../equipamento/equipamento.entity");
let Componente = class Componente {
};
exports.Componente = Componente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Componente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Componente.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Componente.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria, (categoria) => categoria.componentes),
    __metadata("design:type", categoria_entity_1.Categoria)
], Componente.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => equipamento_entity_1.Equipamento, (equipamento) => equipamento.componentes),
    __metadata("design:type", Array)
], Componente.prototype, "equipamentos", void 0);
exports.Componente = Componente = __decorate([
    (0, typeorm_1.Entity)()
], Componente);
//# sourceMappingURL=componente.entity.js.map