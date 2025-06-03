import promptsync from "prompt-sync";
import { typedef, validate } from "bycontract";

export function Retangulo(b, h){
    validate(arguments, ["Number"])
    return (b * h);
}

console.log(Retangulo(2, 4));