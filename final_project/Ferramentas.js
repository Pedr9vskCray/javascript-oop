import {Ferramenta} from "./Basicas.js";

// como a chave está escondida pelo mapa, ela precisa de um indicador para não ser listada
// até que o jogador consiga revelar onde ela está escondida

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

export class Chave_Verde extends Ferramenta{
    constructor(){
        super("chave_verde");
    }
}

export class Chave_Vermelha extends Ferramenta{
    constructor(){
        super("chave_vermelha");
    }
}