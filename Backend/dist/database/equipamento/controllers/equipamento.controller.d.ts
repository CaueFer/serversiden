import { EquipamentoService } from '../services/equipamento.service';
import { Equipamento } from '../equipamento.entity';
export declare class EquipamentoController {
    private readonly equipamentoService;
    constructor(equipamentoService: EquipamentoService);
    findAll(res: any): Promise<Equipamento[] | string>;
    findOne(id: number): Promise<Equipamento>;
    create(equipamento: Equipamento): Promise<Equipamento>;
    update(id: number, equipamentoData: Equipamento): Promise<Equipamento>;
    remove(id: number, res: any): Promise<void>;
}
