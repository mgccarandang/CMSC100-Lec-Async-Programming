const fs = require('fs');

let message = '';

message = fs.readFileSync('hello.txt', 'utf-8');

console.log(message);
console.log("Finished!");