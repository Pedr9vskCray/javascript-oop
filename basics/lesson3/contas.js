import promptsync from "prompt-sync";
import { validate } from "bycontract";

const prompt = promptsync({sigint: true});

class Comum{

    #numero
    #saldo

    constructor(numero, saldo){
        validate(arguments, ["String", "Number"]);
        this.#numero = numero;
        this.#saldo = saldo;
    }

    get numero() { return this.#numero }
    get saldo() { return this.#saldo }

    set numero(numero) {
        validate(numero, "String");
        this.#numero = numero;
    }

    set saldo(saldo){
        validate(saldo, "Number");
        this.#saldo = saldo;
    }

    retirada(valor){
        validate(valor, "Number");
        if (valor > this.#saldo){
            console.log("Você está tentando sacar mais dinheiro do que possui.");
            return
        }

        console.log(`Você está sacando ${valor} reais.`)
        this.#saldo -= valor;
        console.log(`Seu saldo atual é ${this.#saldo}`);
        return
    }

    deposito(valor){
        validate(valor, "Number");
        this.#saldo += valor;
        console.log(`Seu saldo atual é ${this.#saldo}`);
        return
    }



}

class Poupança extends Comum{

    #taxaPorcentagem;

    constructor(numero, saldo, taxaPorcentagem){
        super(numero, saldo);
        this.#taxaPorcentagem = taxaPorcentagem;
    }

    computaJuros(){
        console.log(`Seu saldo antes dos juros: ${super.saldo}`);
        let juros = (super.saldo * this.#taxaPorcentagem) / 100;
        console.log(`Juros obtidos esse mês ${juros}`);
        super.saldo += juros;
        console.log(`Seu saldo atual é: ${super.saldo}`);
    }

}

class Limite extends Comum{

    #limite;

    constructor(numero, saldo, limite){
        validate(limite, "Number");
        super(numero, saldo);
        this.#limite = limite;
    }

    get limite() { return this.#limite }

    set limite(limite){
        validate(limite, "Number");
        this.#limite = limite;
    }

    retirada(valor){
        validate(valor, "Number");
        if (valor > super.saldo){
            let aux = (super.saldo - valor);
            aux = aux * -1;
            if (aux > this.#limite){
                console.log("Esse saque vai estourar o limite da sua conta, ele será automaticamente cancelada");
                return
            } else {
                this.#limite -= aux;
                super.saldo = 0; // entrando no limite
                console.log(`Você está sacando ${valor} reais.`)
            }
        } else {
            super.saldo -= valor;
            console.log(`Você está sacando ${valor} reais.`)
        }

    }

    verificarLimite(){
        console.log(`Seu limite atual é: ${this.#limite}`);
    }

}

let conta = new Limite("a1b2c3", 1500, 1200);

console.log(conta.saldo);
conta.verificarLimite();
conta.retirada(1400);
console.log(conta.saldo);

conta.retirada(1200);

conta.verificarLimite();
console.log(conta.saldo);

conta.retirada(1200);