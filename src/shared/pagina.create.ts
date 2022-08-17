import { EntidadeBase } from "./entidade.model";
import { IPaginaFormulario } from "./pagina.create.interface";
import { IPaginaHTML } from "./pagina.interface";
import { IRepositorio } from "./repositorio.interface";

export abstract class PaginaCreateBase<T extends EntidadeBase>  implements IPaginaHTML, IPaginaFormulario {
    protected registro : T

    constructor(private repositorioRegistros: IRepositorio<T>){
        this.configurarElementos();
    }

    abstract configurarElementos() : void;

    gravarRegistros(): void {
        
        this.configurarElementos();
        
        //const prioridade = this.rdbPrioridade.value as Prioridade;

        //this.txtDescricao.value, prioridade
         
        //var novoRegistro = this.txtDescricao.value;
              
        this.repositorioRegistros.inserir(this.registro);
    
        // método para redirecionar usuario
        window.location.href = "tarefa.list.html";        
    }   
}