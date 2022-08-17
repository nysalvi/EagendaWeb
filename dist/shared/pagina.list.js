export class PaginaListagemBase {
    constructor(repositorio) {
        this.repositorio = repositorio;
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const registros = this.repositorio.selecionarTodos();
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        registros.forEach(registro => {
            const novaLinha = corpoTabela.insertRow();
            Object.values(registro).forEach((valor) => {
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
