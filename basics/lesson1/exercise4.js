import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

let matricula = prompt("Digite sua matrícula sem o dígito verificador: ");
let soma = 0;

for (let i=0;i<matricula.length;i++){
    soma = soma + Number(matricula.at(i));
}

soma = String(soma);
let somaFinal = 0;

for (let i=0;i<soma.length;i++){
    somaFinal = somaFinal + Number(soma[i]);
}

console.log(`Seu dígito verificador é ${somaFinal}`);
console.log(`Sua matrícula completa é: ${matricula}-${somaFinal}`)