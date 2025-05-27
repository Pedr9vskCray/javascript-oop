import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

import { validate } from "bycontract";

class Retangulo{
    lado1;
    lado2;

    Area(){
        return (this.lado1 * this.lado2);
    }

    Perimetro(){
        return (2*(this.lado1 + this.lado2));
    }
}

let lado1 = Number(prompt("Digite o primeiro lado do retângulo: "));
validate(lado1, "Number");

let lado2 = Number(prompt("Digite o primeiro lado do retângulo: "));
validate(lado2, "Number");

let ret = new Retangulo();
ret.lado1 = lado1;
ret.lado2 = lado2;

console.log(`Área do Retângulo: ${ret.Area()}`);
console.log(`Perímetro do Retângulo: ${ret.Perimetro()}`);

// para ver a estrutura da função podemos fazer da seguinte forma

console.log(`${ret.Area}`);
