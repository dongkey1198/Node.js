//경로처리할때 사용하는 node의 module
const path = require('path');


console.log(path.join(__dirname, "..", 'var.js'));
console.log(path.resolve(__dirname, '..','/var.js'));