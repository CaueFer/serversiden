import { ComponenteService } from '../services/componente.service';
import { Componente } from '../componente.entity';
export declare class ComponenteController {
    private readonly componenteService;
    constructor(componenteService: ComponenteService);
    findAll(): Promise<Componente[]>;
    findOne(id: number): Promise<Componente>;
    create(componente: Componente): Promise<Componente>;
    update(id: number, componenteData: Componente): Promise<Componente>;
    remove(id: number, res: any): Promise<void>;
}
