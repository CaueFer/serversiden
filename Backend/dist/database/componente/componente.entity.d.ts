import { Categoria } from '../categoria/categoria.entity';
import { Equipamento } from '../equipamento/equipamento.entity';
export declare class Componente {
    id: number;
    nome: string;
    descricao: string;
    categoria: Categoria;
    equipamentos: Equipamento[];
}
