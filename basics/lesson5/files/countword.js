import { typedef, validate } from "bycontract";
import nReadlines from "n-readlines";

let words = new Map();

function readFILE(file){
    validate(file, "String");
    let arqv = new nReadlines(file); 
    let buff = "";

    while (buff = arqv.next()){
        let aux = Array.from(words.keys());
        let line = buff.toString('utf8');

        if (line.charAt(line.length-1) == "\r"){
            line = line.replace("\r", "");
        }
        
        if (aux.includes(line)){
            words.set(line, words.get(line)+1);
        } else {
            words.set(line, 1);
        }
    }
}

readFILE("./files/words.txt");

console.log(words);
console.log(words.get("pedro"));