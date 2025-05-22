import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

import { validate } from "bycontract";

function validador(acesso){
    acesso = String(acesso);
    switch(acesso){
        case "11":
        case "21":
        case "35":
        case "66":
            return true;
        default:
            return false;
    }
}

function defineMatricula(intervalo, acesso="21"){

    let matricula = String(acesso) + String(intervalo);
    let soma = 0;

    for (let i=0;i<matricula.length;i++){
        soma = soma + Number(matricula.at(i));
    }

    soma = String(soma);
    let verificador = 0;

    for (let i=0;i<soma.length;i++){
        verificador = verificador + Number(soma[i]);
    }

    return(`${matricula}-${verificador}`);   
}

let acesso = Number(prompt("Digite o nível de acesso do funcionário: "));
validate(acesso, "Number");
if (validador(acesso)){
    let intervalo = Number(prompt("Digite o intervalo do funcionário: "));
    validate(intervalo, "Number");
    console.log(`Sua matrícula completa é: ${defineMatricula(intervalo, acesso)}`);
}else {
    console.log("Nível de Acesso Inválido.");
}
