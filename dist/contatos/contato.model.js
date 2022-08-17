import { EntidadeBase } from "../shared/entidade.model";
export class Contato extends EntidadeBase {
    constructor(nome, email, telefone, empresa, cargo) {
        super();
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.empresa = empresa;
    }
}
new Contato();
