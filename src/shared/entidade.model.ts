import {Guid} from "./guid.model.js";

export abstract class EntidadeBase {
    public id : string

    public constructor() {
        this.id = new Guid().gerarNovoId();
    }    
} 
