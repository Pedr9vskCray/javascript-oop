import promptsync from "prompt-sync";
import { typedef, validate } from "bycontract";

const prompt = promptsync({sigint: true});

typedef("#propriedadeTeste",
    {
        teste3: "boolean"
    }
)

class Teste{
    #prop1;

    constructor(prop1){
        this.#prop1 = prop1;
    }

    get prop1() { return this.#prop1 }
    set prop1(prop1) { this.#prop1 = prop1}
}

class Newteste extends Teste{
    #prop2;

    constructor(prop1, prop2){
        super(prop1);
        this.#prop2 = prop2;
    }

    get prop2() { return this.#prop2 }
    set prop2(prop2) { this.#prop2 = prop2}
}

let teste1 = new Teste("pedro");
let teste2 = new Newteste("felipe", 21);
let teste3 = new Newteste("luiz", 24)

let array = [teste1, teste2, teste3]

globalThis.Teste = Teste

function imprime(array){
    validate(arguments, ["Array.<Teste>"]);
    for (let n of array){
        console.log(n.prop1);
    }
}

imprime(array);