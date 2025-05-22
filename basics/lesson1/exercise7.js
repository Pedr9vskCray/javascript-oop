import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

import { validate } from "bycontract";

let num = 0;
let idades = [];
let igual = 0;
let maior = 0;

while (num != -1){
    console.log("Digite -1 para parar de enviar idades.");
    num = Number(prompt("Digite a idade que você deseja inserir: "));
    validate(num, "Number");
    console.log("\n");
    if (num == -1){
        //pass
    }else {
        idades.push(num);
    }
}

let busca = prompt("Digite a idade que você deseja buscar: ");
validate(busca, "Number");

for (let idade of idades){
    if (idade === Number(busca)){
        igual += 1;
    } else if (idade > Number(busca)){
        maior += 1;
    }
}

console.log(idades);
console.log(`A sua turma tem: ${idades.length} pessoas.`);
console.log(`A sua turma tem ${igual} com essa idade.`);
console.log(`A sua turma tem ${maior} mais velhas que isso.`);