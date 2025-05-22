import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});


console.log("Público Geral - 1");
console.log("Convidado - 2");
console.log("Idoso - 3");
console.log("Funcionário - 4");
console.log("Funcionário Idoso - 5");
console.log("Criança - 6");
console.log("\n");

let categoria = Number(prompt("Por favor, insira o número da categoria na qual você se enquadra: "));
let ingressoGeral = 500;
let precoFinal = 0;

switch (categoria) {
    case  1:
        console.log(`Categoria Geral - Preço: R$${ingressoGeral}`);
        break;
    case 2:
        precoFinal = ingressoGeral * 0.75;
        console.log(`Categoria Convidado - Preço: R$${precoFinal}`);
        break;
    case 3:
        precoFinal = ingressoGeral * 0.50;
        console.log(`Categoria Idoso - Preço: R$${precoFinal}`);
        break;
    case 4:
        precoFinal = ingressoGeral * 0.50;
        console.log(`Categoria Funcionário - Preço: R$${precoFinal}`);
        break;
    case 5:
        precoFinal = (ingressoGeral * 0.50) * 0.5;
        console.log(`Categoria Funcionário Idoso - Preço: R$${precoFinal}`);
        break;
    case 6:
        console.log(`Categoria Criança - Preço: R$${precoFinal}`);
        break;
}