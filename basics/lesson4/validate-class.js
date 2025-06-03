import promptsync from "prompt-sync";
import { typedef, validate } from "bycontract";

const prompt = promptsync({sigint: true});

class Teste{
    #prop1;

    constructor(prop1){
        this.#prop1 = prop1;
    }

    get prop1() { return this.#prop1 }
    set prop1(prop1) { this.#prop1 = prop1}
}

class Newtest extends Teste{
    #prop2;

    constructor(prop1, prop2){
        super(prop1);
        this.#prop2 = prop2;
    }

    get prop2() { return this.#prop2 }
    set prop2(prop2) { this.#prop2 = prop2}
}

let teste1 = new Teste("pedro");
let teste2 = new Newtest("felipe", 21);

function imprime(teste){
    validate(arguments, [{"prop1": "string", "prop2": "number"}]);
    validate(arguments, [Teste]);
    // validate(arguments, Teste); -> error idk why
    console.log(teste.prop2);
}

imprime(teste2);