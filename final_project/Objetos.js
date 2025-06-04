import { validate } from "bycontract";
import { Objeto, Ferramenta } from "./Basicas.js";
import { Chave_enferrujada, Chave_de_fenda, Martelo } from "./Ferramentas.js";

export class Armario extends Objeto{
    constructor(){
        super(
            "armario",
            "O armário está trancado.",
            "O armário está aberto, você consegue ver uma passagem secreta dentro dele."
        )
    }

    usar(ferramenta){
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof Chave_enferrujada){
            this.acaoOk = true;
        }
        return this.acaoOk;
    }
}

export class BilheteQuarto extends Objeto{
    constructor(){
        super(
            "bilhete_quarto",
            "No bilhete está escrito: \"Lembra das Crônicas de Nárnia?\"",
            ""
        );
    }

    usar(ferramenta){
        validate(ferramenta, Ferramenta);
        return false;
    }
}

export class CaixaDeMadeira extends Objeto{
    constructor(){
        super(
            "caixa_de_madeira",
            "Uma caixa de madeira cuidadosamente construída para proteger seu interior.",
            "Pedaços de madeira espalhados por todo lado, escondido entre os fragmentos há um bilhete."
        );
    }

    usar(ferramenta){
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof Martelo){
            this.acaoOk = true;
        }
        return this.acaoOk;
    }
}

export class BilheteCaixa extends Objeto{

    #visivel;

    constructor(){
        super(
            "bilhete_caixa",
            "No bilhete está escrito: \"Lugar Errado!\"",
            ""
        );
        this.#visivel = false;
    }

    usar(ferramenta){
        validate(ferramenta, Ferramenta);
        return false;
    }

    get visivel() { return this.#visivel }
    set visivel(bool){
        this.#visivel = bool;
    } 
}

export class DutoVentilacao extends Objeto{
    constructor(){
        super(
            "duto_ventilacao",
            "Um Duto de Ventilação selado, fechado firmemente por uma grade de metal presa por 4 parafusos.",
            "A grade protegendo o Duto foi removida, revelando uma pequena caixa de plástico com uma chave enferrujada dentro."
        );
    }

    usar(ferramenta){
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof Chave_de_fenda){
            this.acaoOk = true;
        }
        return this.acaoOk;
    }
}

export class CaixaDePlastico extends Objeto{

    #visivel;

    constructor(){
        super(
            "caixa_de_plastico",
            "Um caixa de plástico com uma pequena chave de metal enferrujada dentro.",
            "Depois de bater várias vezes com o martelo, você consegue finalmente quebrar parte da estrutura de plástico e retirar a chave."
        )
        this.#visivel = false;
    }

    usar(ferramenta){
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof Martelo){
            this.acaoOk = true;
        }
        return this.acaoOk;
    }

    get visivel() { return this.#visivel }
    set visivel(bool){
        this.#visivel = bool;
    }
}