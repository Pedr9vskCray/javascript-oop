import promptsync from "prompt-sync";
import { typedef, validate } from "bycontract";
import nReadlines from "n-readlines";

function readFILE(file){
    validate(file, "String");
    let arqv = new nReadlines(file); // preparing to read the lines
    let buff = ""; // preparing the buffer

    while (buff = arqv.next()){ // returns true line by line until the end where returns false
        let line = buff.toString('utf8'); // line to string in "utf8";
        console.log(line);
    }
}

readFILE("./files/info.txt");