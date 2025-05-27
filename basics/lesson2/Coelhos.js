import promptsync from "prompt-sync";
import { validate } from "bycontract";

const prompt = promptsync({sigint: true});

class Coelho{
    static #qntCoelhos = null;
    #raça;
    #peso;

    constructor(raça, peso){
        validate(arguments, ["String", "Number"]);
        this.#raça = raça;
        this.#peso = peso;
        Coelho.#qntCoelhos += 1;
    }

    static retornaCoelhos(){
        return Coelho.#qntCoelhos;
    }
}

let coelho1 = new Coelho("Rex", 2.5);
let coelho2 = new Coelho("Holland Lop", 2);
let coelho3 = new Coelho("Fuzzy Lop", 2);
let coelho4 = new Coelho("Mini Lop", 3);

console.log(Coelho.retornaCoelhos())