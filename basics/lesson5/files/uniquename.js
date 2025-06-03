import { typedef, validate } from "bycontract";
import nReadlines from "n-readlines";

function readFILE(file){
    let temp = new Array();

    validate(file, "String");
    let arqv = new nReadlines(file); 
    let buff = "";

    while (buff = arqv.next()){
        let line = buff.toString('utf8');

        if (line.charAt(line.length-1) == "\r"){
            line = line.replace("\r", "");
        }

        temp.push(line);
        
    }

    temp = new Set(temp);
    return temp;
}



let names = readFILE("./files/words.txt");

console.log(names);