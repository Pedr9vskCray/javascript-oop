import { validate, typedef } from "bycontract";

class Personagem{

    #nome;
    #ataque;
    #defesa;
    #choque;
    #agua;
    #vento;
    #fogo;

    constructor({ // importante receber os parâmetros como se fossem um objeto, ou seja, entre {}
        nome=undefined,
        ataque=10,
        defesa=10,
        choque=false,
        agua=false,
        vento=false,
        fogo=false
    }) {

        if (nome == undefined){
            throw new Error("Nome não informado.");
        }

        this.#nome = nome;
        this.#ataque = ataque;
        this.#defesa = defesa;
        this.#choque = choque;
        this.#agua = agua;
        this.#vento = vento;
        this.#fogo = fogo;
    }

    get nome() { return this.#nome }
    get ataque() { return this.#ataque }
    get defesa() { return this.#defesa }
    get choque() { return this.#choque }
    get agua() { return this.#agua }
    get vento() { return this.#vento }
    get fogo() { return this.#fogo }

    get config(){
        return [this.#choque, this.#agua, this.#vento, this.#fogo];
    }

}

let stats = {
    nome: "pedr9vskcray",
    ataque: 21,
    fogo: true,
}


let player1 = new Personagem(stats);

console.log(player1.config);

