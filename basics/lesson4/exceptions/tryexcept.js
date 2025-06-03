import { typedef, validate } from "bycontract";

function imprimeIdade(idade){
    validate(idade, "Number");
    try {
        if (idade < 0){ throw new Error("Idade inválida.", {cause: "invalid input"}) }
        console.log(idade);
    } catch (error){
        console.log("Erro:", error.message, "-", error.cause);
        console.log("Insira uma idade válida e tente novamente.")
        // process.exit(1); -> abortando o programa
    } finally {
        console.log("Fim do programa."); // executa com ou sem erro
    }
}

imprimeIdade(-10);