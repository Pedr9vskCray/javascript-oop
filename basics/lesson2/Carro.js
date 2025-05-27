import promptsync from "prompt-sync";
import { validate } from "bycontract";

const prompt = promptsync({sigint: true});

class Carro{
    #placa;
    #modelo;
    #tamanhoTanque;
    #litrosNoTanque;
    #consumo;

    constructor(placa, modelo, tamanho, litrosNoTanque, consumo){
        validate(arguments, ["String", "String", "Number", "Number", "Number"]);

        if (litrosNoTanque > tamanho){
            console.log("A quantidade de litros no tanque não pode ser maior que o tamanho total do tanque.");
            process.exit(1);
        }
        
        this.#placa = placa;
        this.#modelo = modelo;
        this.#tamanhoTanque = tamanho;
        this.#litrosNoTanque = litrosNoTanque;
        this.#consumo = consumo;
    }

    get placa() { return this.#placa; }
    get modelo() { return this.#modelo; }
    get tamanhoTanque() { return this.#tamanhoTanque; }
    get litrosNoTanque() { return this.#litrosNoTanque; }
    get consumo() { return this.#consumo; }

    set placa(placa){
        validate(placa, "String");
        this.#placa = placa;
    }

    set modelo(modelo){
        validate(modelo, "String");
        this.#modelo = modelo;
    }

    set tamanhoTanque(tamanhoTanque){
        validate(tamanhoTanque, "Number");

        if (this.#litrosNoTanque > tamanhoTanque){
            console.log("A quantidade de litros no tanque não pode ser maior que o tamanho total do tanque.");
            process.exit(1);
        }

        this.#tamanhoTanque = tamanhoTanque;
    }

    set litrosNoTanque(litrosNoTanque){
        validate(litrosNoTanque, "Number")

        if (litrosNoTanque > this.#tamanhoTanque){
            console.log("A quantidade de litros no tanque não pode ser maior que o tamanho total do tanque.");
            process.exit(1);
        }

        this.#litrosNoTanque = litrosNoTanque;
    }

    set consumo(consumo){
        validate(consumo, "Number");
        this.#consumo = consumo;
    }

    #combustivelNecessario(distancia){ // função privada dentro do método
        validate(distancia, "Number");
        return distancia / this.#consumo;
    }

    podeViajar(distancia){
        validate(distancia, "Number");
        if (this.#combustivelNecessario(distancia) > this.#litrosNoTanque){
            return false;
        } else {
            return true;
        }
    }

    abastecer(quantidade){
        validate(quantidade, "Number");
        if ((this.#litrosNoTanque + quantidade) > this.#tamanhoTanque){
            console.log("Não é possível abastecer essa quantidade de gasolina pois o tanque vai transbordar com a gasolina em excesso.");
        } else {
            this.#litrosNoTanque += quantidade;
        }
    }

    viajar(distancia){
        validate(distancia, "Number");
        if (this.podeViajar(distancia)){
            this.#litrosNoTanque = this.#litrosNoTanque - this.#combustivelNecessario(distancia);
        } else {
            console.log("O carro não possui combustível suficiente para viajar essa distância.");
        }
    }

    toString(){
        let text = `
        Placa: ${this.#placa}\n
        Modelo: ${this.#modelo}\n
        Tamanho do Tanque: ${this.#tamanhoTanque}\n
        Combustível no Tanque: ${this.litrosNoTanque}\n
        Consumo: ${this.#consumo}\n`

        return text;
    }


}

let carro = new Carro("KXY4A94", "Fiat Strada", 55, 42, 13);


console.log(carro.consumo); // método get sendo utilizado ao invés de ir direto na propriedade
carro.consumo = 10; // método set sendo utilizado ao invés de ir direto na propriedade
console.log(carro.consumo);

carro.consumo = 13;

console.log(carro.toString());

console.log(carro.podeViajar(100));
console.log(carro.podeViajar(546))

console.log(carro.litrosNoTanque);
carro.abastecer(13);
console.log(carro.litrosNoTanque);

carro.viajar(500);
console.log(carro.litrosNoTanque);

console.log(carro.podeViajar(227));
carro.viajar(227);

console.log(carro.placa);
carro.placa = "KBG4A94";
console.log(carro.placa);