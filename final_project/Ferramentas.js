import {Ferramenta} from "./Basicas.js";

export class Chave_enferrujada extends Ferramenta{

    #visivel

    constructor(){
        super("chave_enferrujada");
        this.#visivel = false;
    }

    get visivel() { return this.#visivel }
    set visivel(bool){
        this.#visivel = bool;
    }
}

export class Chave_de_fenda extends Ferramenta{
    constructor(){
        super("chave_de_fenda");
    }
}

export class Martelo extends Ferramenta{
    constructor(){
        super("martelo");
    }
}