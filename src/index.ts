import { IPaginaHTML } from "./shared/pagina.interface";

class Index implements IPaginaHTML {
    btnCadastrar : HTMLButtonElement;

    constructor(){
        this.configurarElementos();
    }
    public configurarElementos() : void{        }
}
new Index();