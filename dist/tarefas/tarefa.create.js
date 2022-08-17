import { RepositorioTarefaLocalStore } from "./repositorioTarefaLocalStorage";
import { PaginaCadastroBase } from "../shared/pagina.create";
class TarefaPaginaCadastro extends PaginaCadastroBase {
    constructor(repositorioTarefas) {
        super(repositorioTarefas);
    }
}
new TarefaPaginaCadastro(new RepositorioTarefaLocalStore());
