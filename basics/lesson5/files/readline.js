import { typedef, validate } from "bycontract";
import { createInterface } from "readline";
import { createReadStream } from "fs";

// using the readline module native to javascript

var myInterface = createInterface({
    input: createReadStream('./files/words.txt')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});