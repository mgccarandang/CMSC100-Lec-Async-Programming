const fs = require('fs');

let message = '';

fs.readFile('hello.txt', 'utf-8', (err, contentsOfFile) => {
  if (!err)  {
    message = contentsOfFile;
    console.log(message);
  }
  else {
    console.log(err)
  }
})

console.log(message);
console.log("Finished!");