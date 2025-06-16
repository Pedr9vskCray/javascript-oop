import { Engine } from "./Basicas.js"
import { QuartoPais, MeuQuarto, SalaEstar, Lavanderia, QuartoSecreto, Entrada } from "./Salas.js"

export class Jogo extends Engine{

    quartoDosPais;
    meuQuarto;
    salaDeEstar;
    lavanderia;
    quartoSecreto;
    Entrada;

    constructor(){
        super();

        this.quartoDosPais = new QuartoPais(this);
        this.meuQuarto = new MeuQuarto(this);
        this.salaDeEstar = new SalaEstar(this);
        this.lavanderia = new Lavanderia(this);
        this.quartoSecreto = new QuartoSecreto(this);
        this.Entrada = new Entrada(this);

        this.quartoDosPais.portas.set(this.meuQuarto.nome, this.meuQuarto);
        this.meuQuarto.portas.set(this.Entrada.nome, this.Entrada);
        this.meuQuarto.portas.set(this.quartoDosPais.nome, this.quartoDosPais);
        this.meuQuarto.portas.set(this.salaDeEstar.nome, this.salaDeEstar);
        this.salaDeEstar.portas.set(this.meuQuarto.nome, this.meuQuarto);
        this.salaDeEstar.portas.set(this.lavanderia.nome, this.lavanderia);
        this.lavanderia.portas.set(this.Entrada.nome, this.Entrada);
        this.lavanderia.portas.set(this.salaDeEstar.nome, this.salaDeEstar);
        this.quartoDosPais.portas.set(this.quartoSecreto.nome, this.quartoSecreto);
        this.quartoSecreto.portas.set(this.quartoDosPais.nome, this.quartoDosPais);
        this.Entrada.portas.set(this.meuQuarto.nome, this.meuQuarto)
        this.Entrada.portas.set(this.lavanderia.nome, this.lavanderia)

        this.salaCorrente = this.meuQuarto;
    }

    revelaQuarto(){
        this.quartoSecreto.visivel = true; 
    }

}