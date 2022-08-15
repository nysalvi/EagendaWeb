import { EntidadeBase } from "../../Dominio/base/entidade.model";
import { IRepositorio } from "./repositorio.interface";

export class RepositorioLocalStoreBase<T extends EntidadeBase> implements IRepositorio<T>{
    protected readonly localStorage : Storage;
    constructor(){
        this.localStorage = window.localStorage;
    }
    inserir(registro: T): void {
        var registroEmString = JSON.stringify(registro);
        this.localStorage.setItem(registro.id, registroEmString);
        /*var jsonString = JSON.parse(registroEmString);*/
    }
    editar(registro: T): void{
        this.localStorage.removeItem(registro.id);
        
        var registroEmString = JSON.stringify(registro);
        this.localStorage.setItem(registro.id, registroEmString);
        /*var jsonString = JSON.parse(registroEmString);*/
    }
    excluir(registro : T): void {
        this.localStorage.removeItem(registro.id);
    }
    selecionarTodos(): T[] {
        var dados = new Array<T>;
        this.localStorage.forEach((x : string) => {
            dados.push(JSON.parse(x));
        });
        return dados;
    }
}