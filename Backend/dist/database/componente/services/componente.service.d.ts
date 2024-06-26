import { Repository } from 'typeorm';
import { Componente } from '../componente.entity';
export declare class ComponenteService {
    private componenteRepository;
    constructor(componenteRepository: Repository<Componente>);
    findAll(): Promise<Componente[]>;
    findOne(id: number): Promise<Componente>;
    create(componente: Componente): Promise<Componente>;
    update(id: number, componenteData: Componente): Promise<Componente>;
    remove(id: number): Promise<void>;
}
