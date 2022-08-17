import { IPaginaHTML } from "../shared/pagina.interface";
import { PaginaBase } from "../shared/pagina.model";
import { Tarefa } from "./tarefa.model";

export class TarefaPagina extends PaginaBase<Tarefa> implements IPaginaHTML {
    configurarElementos(): void {
        
    }
}