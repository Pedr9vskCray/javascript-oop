import { Engine } from "./Basicas.js"
import { QuartoPais, MeuQuarto, SalaEstar, Lavanderia } from "./Salas.js"

export class Jogo extends Engine{
    constructor(){
        super();
    }

    criaCenario(){
        let quartoDosPais = new QuartoPais(this);
        let meuQuarto = new MeuQuarto(this);
        let salaDeEstar = new SalaEstar(this);
        let lavanderia = new Lavanderia(this);

        quartoDosPais.portas.set(meuQuarto.nome, meuQuarto);
        meuQuarto.portas.set(quartoDosPais.nome, quartoDosPais);
        meuQuarto.portas.set(salaDeEstar.nome, salaDeEstar);
        salaDeEstar.portas.set(meuQuarto.nome, meuQuarto);
        salaDeEstar.portas.set(lavanderia.nome, lavanderia);
        lavanderia.portas.set(salaDeEstar.nome, salaDeEstar);

        this.salaCorrente = meuQuarto;
    }
}