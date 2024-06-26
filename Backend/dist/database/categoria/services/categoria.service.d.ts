import { Repository } from 'typeorm';
import { Categoria } from '../categoria.entity';
export declare class CategoriaService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(id: number, categoriaData: Categoria): Promise<Categoria>;
    remove(id: number): Promise<void>;
}
