import { IRepositorio } from "../shared/repositorio.interface.js"; 
import { Tarefa } from "./tarefa.model.js"; 
import { RepositorioTarefaLocalStore } from "./repositorioTarefaLocalStorage.js"; 
import { PaginaListagemBase } from "../shared/pagina.list.js";

class TarefaPaginaListagem extends PaginaListagemBase<Tarefa>{

  constructor(repositorioTarefas: IRepositorio<Tarefa>) {
      super(repositorioTarefas);
  }
}

new TarefaPaginaListagem(new RepositorioTarefaLocalStore());