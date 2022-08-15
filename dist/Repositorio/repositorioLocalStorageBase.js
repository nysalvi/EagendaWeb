export class RepositorioLocalStoreBase {
    constructor(storageKey) {
        this.localStorage = window.localStorage;
        this.storageKey = storageKey;
    }
    inserir(dados) {
        var jsonString = JSON.parse(dados);
        this.localStorage.setItem(this.storageKey, jsonString);
    }
    editar(dados) {
        var _a;
        (_a = this.localStorage.getItem(this.storageKey)) === null || _a === void 0 ? void 0 : _a.replace(dados.id, dados);
    }
    excluir() {
        throw new Error("Method not implemented.");
    }
    selecionarTodos() {
        throw new Error("Method not implemented.");
    }
}
