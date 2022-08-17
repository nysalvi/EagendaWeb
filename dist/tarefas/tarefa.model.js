import { EntidadeBase } from "../shared/entidade.model";
import { Prioridade } from "./prioridade.enum";
export class Tarefa extends EntidadeBase {
    /*
    constructor(prioridade : string,
    titulo : string, dataCriacao : Date, dataConclusao : Date, percentual : number){
        super();
        this.prioridade = prioridade;
        this.titulo = titulo;
        this.dataCriacao = new Date();
        this.dataConclusao = dataConclusao;
        this.percentual = percentual;
    }
    */
    constructor(descricao, prioridade) {
        var _a;
        super();
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.prioridade = (_a = Prioridade[prioridade]) !== null && _a !== void 0 ? _a : undefined;
    }
}
