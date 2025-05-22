import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

let juices = Number(prompt("How many drinks you had? "));
let sandwiches = Number(prompt("How many sandwiches did you eat? "));

const juicePrice = 5.2;
const sandwichPrice = 12;

// conditional variable declaration
// let myVariable = (true condition) ? "true" : "false"

// applying a 20% discount if the number of items is bigger than 10

let totalJuice = (juices >= 10) ? (juices * juicePrice)*0.8 : (juices * juicePrice);
let totalSandwich = (sandwiches >= 10) ? (sandwiches * sandwichPrice)*0.8 : (sandwiches * sandwichPrice);

let endTotal = (totalJuice + totalSandwich);

console.log(`Receipt:\n
    Juice Total: ${totalJuice.toFixed(2)}\n
    Sandwich Total: ${totalSandwich}\n
    Total: ${endTotal.toFixed(2)}`);