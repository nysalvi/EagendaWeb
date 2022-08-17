import { RepositorioTarefaLocalStore } from "./repositorioTarefaLocalStorage.js";
import { PaginaListagemBase } from "../shared/pagina.list.js";
class TarefaPaginaListagem extends PaginaListagemBase {
    constructor(repositorioTarefas) {
        super(repositorioTarefas);
    }
}
new TarefaPaginaListagem(new RepositorioTarefaLocalStore());
