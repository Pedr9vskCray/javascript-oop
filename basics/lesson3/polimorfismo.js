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

globalThis.Comum = Comum;

class Poupança extends Comum{

    #taxaPorcentagem;

    constructor(numero, saldo, taxaPorcentagem){
        validate(taxaPorcentagem, "Number");
        super(numero, saldo);
        this.#taxaPorcentagem = taxaPorcentagem;
    }

    get taxaPorcentagem() { return this.#taxaPorcentagem }
    set taxaPorcentagem(taxaPorcentagem) {
        validate(taxaPorcentagem, "Number");
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

function depositoInicial(contas, inicial){

    validate(inicial, "Number")

    function checkType(element){
        if (element instanceof Comum){
            return true
        }
        return false
    }

    if(contas.every(checkType)){
        for (let conta of contas){
            conta.deposito(inicial);
        }
    } else {
        console.log("Um dos elementos não dentro do array não é uma conta comum.")
        process.exit(1);
    }
}

function aplicaJuros(contas, taxa){
    validate(taxa, "Number");

    function checkType(element){
        if (element instanceof Poupança){
            return true
        }
        return false
    }

    if (contas.every(checkType)) {
        for (let conta of contas){
            conta.taxaPorcentagem = taxa;
            conta.computaJuros();
            console.log("\n");
        }
    } else {
        console.log("Um dos elementos não dentro do array não é uma conta poupança.")
        process.exit(1)
    }
}

function imprimeConta(array){
    function checkType(element){
        if (element instanceof Comum){
            return true
        }
        return false
    }

    if (array.every(checkType)){
        for (let conta of array){
            console.log(`Numero: ${conta.numero}, Saldo: ${conta.saldo}`)
            console.log("\n")
        }
    } else{
        console.log("Um dos elementos não dentro do array não é uma conta comum.")
        process.exit(1)
    }
}

let conta1 = new Comum("a1b2c3", 500);
let conta2 = new Poupança("d4e5f6", 1000, 10);
let conta3 = new Limite("g7h8i9", 2500, 2000);
let conta4 = new Comum("b2a1c3", 2000);
let conta5 = new Poupança("f6d4e5", 3500, 15);
let conta6 = new Limite("h8g7i9", 1500, 1500);

let contas = [conta1, conta2, conta3, conta4, conta5, conta6];

depositoInicial(contas, 1000);

console.log("\n");

let aux = new Array();
for (let conta of contas){
    if (conta instanceof Poupança){
        aux.push(conta);
    } else {
        //pass
    }    
}
aplicaJuros(aux, 12)

console.log("\n");

contas[4].deposito(200);
contas[5].retirada(1500);

console.log("\n");

imprimeConta(contas);

