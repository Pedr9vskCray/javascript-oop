// javascript tries to simplify your life by making comparisons easier
// but this can get a bit confusing if you don't pay attention, for example:

let x = 10;
let y = "10";

console.log(x == y); // this will result in true even though they are different types of data

// == only verifies equality, even if they are of different types the output is true
// === verifies equality and type, no longer resulting in true when comparing

console.log(x === y);