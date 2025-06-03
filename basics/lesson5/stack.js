import { validate, typedef } from "bycontract";

class Stack{
    #base;
    #top;
    #size;

    constructor() {
        this.#base = [];
        this.#top = -1;
        this.#size = 0;
    }

    push(element){
        this.#base.push(element)
        this.#top += 1;
        this.#size += 1;
    }

    pop(){
        let aux = this.#base.pop()
        this.#top -= 1;
        this.#size -= 1;
        return aux;

    }

    top(){
        return this.#base[this.#top];
    }

    size(){
        return this.#size;
    }

    isEmpty(){
        if (this.#base[0] != undefined){
            return false;
        } else {
            return true;
        }
    }
}

let pilha = new Stack();

console.log(pilha.isEmpty());

pilha.push(14.23);

console.log(pilha.isEmpty());

pilha.push(23.16);
pilha.push(63.27);
pilha.push(29.18);
pilha.push(17.44);

console.log(pilha.top());
console.log(pilha.size());
console.log(pilha.pop());
console.log(pilha.top());