import { EntidadeBase } from "../shared/entidade.model"
import { Prioridade } from "./prioridade.enum";
export class Tarefa extends EntidadeBase {
    prioridade? : Prioridade
    descricao? : string
    dataCriacao? : Date
    dataConclusao? : Date
    percentual? : number

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
    constructor(descricao? : string, prioridade? : string){
        super()
        this.descricao = descricao
        this.dataCriacao = new Date()
        this.prioridade = Prioridade[prioridade as keyof typeof Prioridade] ?? undefined
    }
}