// node and javascript are usually run on the server side and don't support user inputs
// but we can install a package called prompt-sync that allows us to receive inputs

// run this command -> npm install prompt-sync

import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

// similar to receiving user inputs in python, you need to type-cast into the type you need
// because the value received by user input through prompt will always be string

let value1 = Number(prompt("First value: ")); // type-casting string -> number
let value2 = Number(prompt("Second value: "));
let sum = (value1 + value2);

console.log(sum);