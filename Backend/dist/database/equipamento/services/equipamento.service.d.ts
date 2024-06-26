import { Repository } from 'typeorm';
import { Equipamento } from '../equipamento.entity';
export declare class EquipamentoService {
    private equipamentoRepository;
    constructor(equipamentoRepository: Repository<Equipamento>);
    findAll(): Promise<Equipamento[]>;
    findOne(id: number): Promise<Equipamento>;
    create(equipamento: Equipamento): Promise<Equipamento>;
    update(id: number, equipamentoData: Equipamento): Promise<Equipamento>;
    remove(id: number): Promise<void>;
}
