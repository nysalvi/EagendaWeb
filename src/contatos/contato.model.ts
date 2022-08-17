import { EntidadeBase } from "../shared/entidade.model"; 

export class Contato extends EntidadeBase{
    nome? : string;
    email? : string;
    telefone? : string;
    empresa? : string;
    cargo? : string;   

    constructor(nome? : string, 
    email? : string, telefone? : string, empresa? : string, cargo? : string){
        super();
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.empresa = empresa;
    }
}
new Contato();