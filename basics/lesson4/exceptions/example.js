import { typedef, validate } from "bycontract";

function imprimeIdade(idade){
    validate(idade, "Number");
    if (idade < 0) {
        throw new Error("Idade inválida.");
    } else{
        console.log(`Idade: ${idade}`);
    }
}

imprimeIdade(-10);