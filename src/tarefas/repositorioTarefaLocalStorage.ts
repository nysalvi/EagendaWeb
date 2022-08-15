import { Tarefa } from "./tarefa.model";
import { RepositorioLocalStoreBase } from "../shared/repositorioLocalStorageBase";

export class RepositorioTarefaLocalStore extends RepositorioLocalStoreBase<Tarefa>{
    constructor(){
        super();
    }
}