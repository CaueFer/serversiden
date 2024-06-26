"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponenteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const componente_entity_1 = require("./componente.entity");
const componente_service_1 = require("./services/componente.service");
const componente_controller_1 = require("./controllers/componente.controller");
let ComponenteModule = class ComponenteModule {
};
exports.ComponenteModule = ComponenteModule;
exports.ComponenteModule = ComponenteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([componente_entity_1.Componente])],
        providers: [componente_service_1.ComponenteService],
        controllers: [componente_controller_1.ComponenteController],
    })
], ComponenteModule);
//# sourceMappingURL=componente.module.js.map