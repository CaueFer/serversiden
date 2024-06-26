import { Categoria } from '../categoria.entity';
import { CategoriaService } from '../services/categoria.service';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(id: number, categoria: Categoria, res: any): Promise<Categoria>;
    remove(id: number, res: any): Promise<void>;
}
