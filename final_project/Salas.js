import { validate } from "bycontract";
import { Sala, Engine, Ferramenta, Objeto } from "./Basicas.js";
import { Chave_enferrujada, Chave_de_fenda, Martelo, Chave_Verde, Chave_Vermelha } from "./Ferramentas.js";
import { Armario, BilheteQuarto, CaixaDeMadeira, BilheteCaixa, DutoVentilacao, CaixaDePlastico, PortaVermelha } from "./Objetos.js";

export class QuartoPais extends Sala{
    constructor(engine){
        validate(engine, Engine);
        super("Quarto_dos_meus_pais", engine);
        let armario = new Armario();
        this.objetos.set(armario.nome, armario);
    }

    usar(ferramenta,objeto){
        validate(arguments,["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)){
            return false;
        }
        if (!this.objetos.has(objeto)){
            return false;
        }
        let armario = this.objetos.get(objeto);
        let usou = armario.usar(this.engine.mochila.pega(ferramenta));
        if (usou == true){
            //this.engine.indicaFimDeJogo();
            this.engine.revelaQuarto();
            console.log("Passagem secreta liberada!");
        }
        return usou
    }
}

export class QuartoSecreto extends Sala{

    #visivel;

    constructor(engine){
        validate(engine,Engine);
        super("Quarto_Secreto", engine);
        let chave_verde = new Chave_Verde();
        let chave_vermelha = new Chave_Vermelha();
        this.ferramentas.set(chave_verde.nome, chave_verde)
        this.ferramentas.set(chave_vermelha.nome, chave_vermelha)
        this.#visivel = false;
    }

    get visivel() { return this.#visivel }
    set visivel(bool){
        this.#visivel = bool;
    }

    usar(ferramenta,objeto) {
		validate(arguments,["String","String"]);
		return false;
	}
}

export class Entrada extends Sala{
    constructor(engine){
        validate(engine, Engine);
        super("Entrada", engine);
        let porta_vermelha = new PortaVermelha();
        this.objetos.set(porta_vermelha.nome, porta_vermelha);

    }

    usar(ferramenta,objeto){
        validate(arguments,["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)){
            return false;
        }
        if (!this.objetos.has(objeto)){
            return false;
        }
        let porta = this.objetos.get(objeto);
        let usou = porta.usar(this.engine.mochila.pega(ferramenta));
        if (usou == true){
            this.engine.indicaFimDeJogo();
        }
        return usou
    }
}

export class MeuQuarto extends Sala{
    constructor(engine){
        validate(engine, Engine);
        super("Meu_Quarto", engine);
        let martelo = new Martelo();
        let bilheteQuarto = new BilheteQuarto();
        this.ferramentas.set(martelo.nome, martelo);
        this.objetos.set(bilheteQuarto.nome, bilheteQuarto);
    }

    usar(ferramenta,objeto) {
		validate(arguments,["String","String"]);
		return false;
	}
}

export class SalaEstar extends Sala{
    constructor(engine){
        validate(engine, Engine);
        super("Sala_de_Estar", engine);
        let chaveFenda = new Chave_de_fenda();
        let caixaMadeira = new CaixaDeMadeira();
        let bilheteCaixa = new BilheteCaixa();
        this.ferramentas.set(chaveFenda.nome, chaveFenda);
        this.objetos.set(caixaMadeira.nome, caixaMadeira);
        this.objetos.set(bilheteCaixa.nome, bilheteCaixa);
    }

    usar(ferramenta,objeto){
        validate(arguments,["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)){
            return false;
        }
        if (!this.objetos.has(objeto)){
            return false;
        }

        // se a caixa de madeira já tiver sido destruída, revela o bilhete alterando seu valor interno #visivel

        if (objeto == "caixa_de_madeira"){
            let caixaMadeira = this.objetos.get(objeto);
            let aux = caixaMadeira.usar(this.engine.mochila.pega(ferramenta));
            if (aux){
                this.objetos.get("bilhete_caixa").visivel = true;
            }
            return aux
        }
        if (objeto == "bilhete_caixa" && this.objetos.get("caixa_de_madeira").acaoOk == true){
            return false
        }
    }
}

export class Lavanderia extends Sala{
    constructor(engine){
        validate(engine, Engine);
        super("Lavanderia", engine);
        let dutoVentilacao = new DutoVentilacao();
        let caixaPlastico = new CaixaDePlastico();
        let chaveEnferrujada = new Chave_enferrujada();
        this.ferramentas.set(chaveEnferrujada.nome, chaveEnferrujada);
        this.objetos.set(dutoVentilacao.nome, dutoVentilacao);
        this.objetos.set(caixaPlastico.nome, caixaPlastico);
    }

    usar(ferramenta, objeto){
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)){
            return false;
        }
        if (!this.objetos.has(objeto)){
            return false;
        }

        // exatamente a mesma coisa da caixa de madeira

        if (objeto == "duto_ventilacao"){
            let dutoVentilacao = this.objetos.get(objeto);
            let aux = dutoVentilacao.usar(this.engine.mochila.pega(ferramenta));
            if (aux){
                this.objetos.get("caixa_de_plastico").visivel = true;
            }
            return aux
        }
        if (objeto == "caixa_de_plastico" && this.objetos.get("duto_ventilacao").acaoOk == true){
            let caixaPlastico = this.objetos.get(objeto);
            let aux = caixaPlastico.usar(this.engine.mochila.pega(ferramenta));
            if (aux){
                this.ferramentas.get("chave_enferrujada").visivel = true;
            }
            return aux
        }
    }
}