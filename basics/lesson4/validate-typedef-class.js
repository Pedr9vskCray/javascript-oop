import promptsync from "prompt-sync";
import { typedef, validate } from "bycontract";

const prompt = promptsync({sigint: true});

typedef("#propriedadeTeste",
    {
        prop3: "boolean"
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
    #prop3;

    constructor(prop1, prop2, prop3){
        super(prop1);
        this.#prop2 = prop2;
        this.#prop3 = prop3; // boolean
    }

    get prop2() { return this.#prop2 }
    set prop2(prop2) { this.#prop2 = prop2}

    // Implementando a propriedade teste

    get prop3() { return this.#prop3 } // boolean
    set prop3(prop3) { this.#prop3 = prop3 } // boolean
}

let teste1 = new Teste("pedro");
let teste2 = new Newteste("felipe", 21, true);
let teste3 = new Newteste("luiz", 24, false)

let array = [teste2, teste3]

globalThis.Teste = Teste

function imprime(array){
    validate(arguments, ["Array.<#propriedadeTeste>"]);
    for (let n of array){
        console.log(n.prop3);
    }
}

imprime(array);