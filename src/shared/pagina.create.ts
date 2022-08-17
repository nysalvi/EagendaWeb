import { EntidadeBase } from "./entidade.model";
import { IPaginaFormulario } from "./pagina.create.interface";
import { IPaginaHTML } from "./pagina.interface";
import { IRepositorio } from "./repositorio.interface";

export abstract class PaginaCadastroBase<T extends EntidadeBase>  implements IPaginaHTML, IPaginaFormulario {
    private txtDescricao: HTMLInputElement;
    private rdbPrioridade: HTMLInputElement;
    private btnSalvar: HTMLButtonElement;
    
    constructor(private repositorioRegistros: IRepositorio<T>){
        this.configurarElementos();
    }
    configurarElementos(): void {        
        this.txtDescricao = document.getElementById("txtDescricao") as HTMLInputElement;
        this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;
        
        // operador discard _
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros(): void {
        this.rdbPrioridade = document.querySelector('input[type="radio"]:checked') as HTMLInputElement;


        
        //const prioridade = this.rdbPrioridade.value as Prioridade;

        //this.txtDescricao.value, prioridade
         
        //var novoRegistro = this.txtDescricao.value;
              
        this.repositorioRegistros.inserir(novoRegistro);
    
        // método para redirecionar usuario
        window.location.href = "tarefa.list.html";        
    }   
    private obterDadosFormulario() : T {

        Object.values(tarefa).forEach((valor: any) => {
            const novaCelula = novaLinha.insertCell();
            
            novaCelula.innerText = valor;
          });
    } 
}