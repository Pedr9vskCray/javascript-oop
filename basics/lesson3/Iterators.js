import promptsync from "prompt-sync";
import { validate } from "bycontract";

const prompt = promptsync({sigint: true});

class Vagao{

    #id;
    #capacidade;

    constructor(identificador, capacidade){
        validate(arguments, ["String", "String"]);
        this.#id = identificador;
        this.#capacidade = capacidade;
    }

    set identificador(identificador){
        validate(identificador, "String");
        this.#id = identificador;
    }

    set capacidade(capacidade){
        validate(capacidade, "String");
        this.#capacidade = capacidade;
    }

    get identificador() { return this.#id }
    get capacidade() { return this.#capacidade }


}

class Garagem{

    #vagoesVazios;
    #vagoesOcupados;
    #listaVagoes;

    constructor(quantidadeVagas){
        validate(quantidadeVagas, "Number");
        this.#vagoesVazios = quantidadeVagas;
        this.#vagoesOcupados = 0;
        this.#listaVagoes = new Array(quantidadeVagas);
    }

    adicionaVagao(vagao){
        validate(vagao.identificador, "String");
        validate(vagao.capacidade, "String");
        if (this.#vagoesVazios == 0){
            console.log("Todos os espaços estão ocupados, tente remover um vagão.");
            return
        } 
        this.#listaVagoes[this.#vagoesOcupados] = vagao;
        this.#vagoesOcupados += 1;
        this.#vagoesVazios -= 1;
    }

    removeVagao(identificador){
        validate(identificador, "String");
        for (let i=0; i<this.#vagoesOcupados; i++){
            if (this.#listaVagoes[i].identificador === identificador){
                let auxVagao = this.#listaVagoes[i];
                this.#listaVagoes.splice(i, 1);
                this.#vagoesOcupados -= 1;
                this.#vagoesVazios += 1;
                this.#listaVagoes.push(undefined);
                return auxVagao;
            }
        }
    }

    vagoesNaGaragem(){
        let aux = this.#listaVagoes.values();
        let atual = aux.next(); // == this.#listaVagoes[0]
        while (!atual.done){
            let current = atual.value;// == Vagao()
            if (current == undefined){
                console.log("vagão vazio");
                atual = aux.next();
                continue
            }
            console.log(`${current.identificador} - ${current.capacidade}`); 
            atual = aux.next(); // this.#listaVagoes[1]
        }
    }

}

let garagem = new Garagem(5);

let vagao1 = new Vagao("s25hd2", "560 toneladas");
let vagao2 = new Vagao("f5j3l2", "330 toneladas");
let vagao3 = new Vagao("k2j4c9", "760 toneladas");
let vagao4 = new Vagao("l2d3n4", "940 toneladas");
let vagao5 = new Vagao("f2j4b4", "210 toneladas");

garagem.adicionaVagao(vagao1);
garagem.adicionaVagao(vagao2);
garagem.adicionaVagao(vagao3);
garagem.adicionaVagao(vagao4);

garagem.vagoesNaGaragem();

console.log("\n");

garagem.adicionaVagao(vagao5);

garagem.vagoesNaGaragem();

console.log("\n");

garagem.adicionaVagao(vagao5);

console.log("\n");

garagem.removeVagao("k2j4c9");

garagem.vagoesNaGaragem();

console.log("\n");

garagem.removeVagao("f5j3l2");

garagem.vagoesNaGaragem();

console.log("\n");

garagem.adicionaVagao(vagao3);

garagem.vagoesNaGaragem();

console.log("\n");