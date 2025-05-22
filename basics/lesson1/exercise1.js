import promptsync from "prompt-sync";

const prompt = promptsync({sigint: true});

let juices = Number(prompt("How many drinks you had? "));
let sandwiches = Number(prompt("How many sandwiches did you eat? "));

const juicePrice = 5.2;
const sandwichPrice = 12;

let totalJuice = (juices * juicePrice);
let totalSandwich = (sandwiches * sandwichPrice);
let endTotal = (totalJuice + totalSandwich)

console.log(`Receipt:\n
    Juice Total: ${totalJuice.toFixed(2)}\n
    Sandwich Total: ${totalSandwich}\n
    Total: ${endTotal.toFixed(2)}`)