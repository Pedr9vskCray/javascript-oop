let array = new Array(100);

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i=0; i<100; i++){
    array[i] = randomInt(-100, 100);
}

console.log(array);

// a)

for (let i=0; i<100; i++){
    if (array[i] < 0){
        array[i] = array[i] * -2
    }
}

console.log(array);

// b)

// ...array -> is spreading all elements in the array
// console.log(Math.min(...array)); -> easy way

function returnSmallest(array){
    let smallest = array[0];
    for (let number of array){
        if (number < smallest){
            smallest = number;
        }
        if (number === 0){
            console.log("A zero was found, returning now.");
            return smallest; // if a zero is found return to prevent redundant checks
        }
    }
    return smallest;
}

console.log(returnSmallest(array));

// c)

let text = "";

for (let number of array){
    text = text + "[" + String(number) + "]";
}

console.log(text);

