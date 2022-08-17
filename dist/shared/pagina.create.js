export class PaginaCadastroBase {
    constructor(repositorioRegistros) {
        this.repositorioRegistros = repositorioRegistros;
        this.configurarElementos();
    }
    configurarElementos() {
        this.txtDescricao = document.getElementById("txtDescricao");
        this.btnSalvar = document.getElementById("btnSalvar");
        // operador discard _
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        this.rdbPrioridade = document.querySelector('input[type="radio"]:checked');
        //const prioridade = this.rdbPrioridade.value as Prioridade;
        //this.txtDescricao.value, prioridade
        //var novoRegistro = this.txtDescricao.value;
        this.repositorioRegistros.inserir(novoRegistro);
        // método para redirecionar usuario
        window.location.href = "tarefa.list.html";
    }
    obterDadosFormulario() {
        Object.values(tarefa).forEach((valor) => {
            const novaCelula = novaLinha.insertCell();
            novaCelula.innerText = valor;
        });
    }
}
