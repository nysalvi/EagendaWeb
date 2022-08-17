export class RepositorioLocalStoreBase {
    constructor() {
        this.localStorage = window.localStorage;
    }
    inserir(registro) {
        var registroEmString = JSON.stringify(registro);
        this.localStorage.setItem(registro.id, registroEmString);
        /*var jsonString = JSON.parse(registroEmString);*/
    }
    editar(registro) {
        this.localStorage.removeItem(registro.id);
        var registroEmString = JSON.stringify(registro);
        this.localStorage.setItem(registro.id, registroEmString);
        /*var jsonString = JSON.parse(registroEmString);*/
    }
    excluir(registro) {
        this.localStorage.removeItem(registro.id);
    }
    selecionarTodos() {
        var dados = new Array;
        this.localStorage.forEach((x) => {
            dados.push(JSON.parse(x));
        });
        return dados;
    }
}
