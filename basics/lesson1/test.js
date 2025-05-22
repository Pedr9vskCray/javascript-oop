import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

function defineMatricula(intervalo, acesso=21) {

    if (acesso) {
        // pass
    }else {
        acesso = 21;
    }

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

let acesso = prompt("Digite o nível de acesso: ");
let intervalo = prompt("Digite o intervalo: ");

console.log(`Sua matrícula completa é: ${defineMatricula(intervalo, acesso)}`);