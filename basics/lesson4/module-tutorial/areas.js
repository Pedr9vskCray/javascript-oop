import { typedef, validate } from "bycontract";

export function Quadrado(x){
    validate(x, "Number");
    return (x * x);
}

export function Retangulo(b, h){
    validate(arguments, ["Number"])
    return (b * h);
}

export function Triangulo(b, h){
    validate(arguments, ["Number"])
    return (b * h)/2;
}

export function Circulo(r){
    validate(r, "Number");
    const pi = 3.14159;
    return (pi * (r * r));
}