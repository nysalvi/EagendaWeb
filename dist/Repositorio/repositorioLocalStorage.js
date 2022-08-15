export class RepositorioLocalStore {
    constructor() {
        this.localStorage = window.localStorage;
    }
    inserir(dados) {
        var jsonString = JSON.parse(dados);
        this.localStorage.setItem("historico", jsonString);
    }
    editar(dados) {
        var _a;
        (_a = this.localStorage.getItem("historico")) === null || _a === void 0 ? void 0 : _a.replace(dados.id, dados);
    }
    excluir() {
        throw new Error("Method not implemented.");
    }
    selecionarTodos() {
        throw new Error("Method not implemented.");
    }
}
