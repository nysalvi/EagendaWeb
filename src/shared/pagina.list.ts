import { EntidadeBase } from "./entidade.model";
import { IPaginaHTML } from "./pagina.interface";
import { IPaginaListagem } from "./pagina.list.interface";
import { IRepositorio } from "./repositorio.interface";

export abstract class PaginaListagemBase<T extends EntidadeBase>implements IPaginaHTML, IPaginaListagem {
    tabela: HTMLTableElement;
    constructor(private repositorio: IRepositorio<T>) {
      this.configurarElementos();
      this.atualizarTabela();
    }
  
    configurarElementos(): void  {
        this.tabela = document.getElementById("tabela") as HTMLTableElement;
    }
    atualizarTabela(): void{
        const registros = this.repositorio.selecionarTodos();
    
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
    
        registros.forEach(registro => {
          const novaLinha = corpoTabela.insertRow();
    
          Object.values(registro).forEach((valor: any) => {
            const novaCelula = novaLinha.insertCell();
    
            novaCelula.innerText = valor;
          });
    
        });
      }   
}

/*
  constructor(private repositorio : IRepositorio<Tarefa>){
    super(repositorio);
  }
}

new TarefaPaginaListagem(new RepositorioTarefaLocalStore());
*/