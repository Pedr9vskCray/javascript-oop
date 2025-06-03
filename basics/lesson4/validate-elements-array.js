import promptsync from "prompt-sync";
import { typedef, validate } from "bycontract";

const prompt = promptsync({ sigint: true });

let array1 = ["pedro", "josé", "lobão"];
let array2 = ["pedro", "felipe", "luiz", 21]

function imprime(array) {
    validate(arguments, ["Array.<string>"]);
    for (let nome of array) {
        console.log(nome);
    }
}

imprime(array1);
imprime(array2);