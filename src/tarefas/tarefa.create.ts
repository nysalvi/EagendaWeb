import { IRepositorio } from "../shared/repositorio.interface"; 
import { Tarefa } from "./tarefa.model";
import { RepositorioTarefaLocalStore } from "./repositorioTarefaLocalStorage"; 
import { PaginaCadastroBase } from "../shared/pagina.create";

class TarefaPaginaCadastro extends PaginaCadastroBase<Tarefa> {
    constructor(repositorioTarefas: IRepositorio<Tarefa>) {  
        super(repositorioTarefas);
    }
}  
new TarefaPaginaCadastro(new RepositorioTarefaLocalStore());