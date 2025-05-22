import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

function acrescentaVerificador(matricula){
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

let matricula = prompt("Digite sua matrícula sem o dígito verificador: ");
let matriculaCompleta = acrescentaVerificador(matricula);

console.log(`Sua matrícula completa é ${matriculaCompleta}`);

