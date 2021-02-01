const {odd, even} = require('./var.js');
const checkNumber = require('./func.js');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    } else{
        return even;
    }
}

console.log(checkStringOddOrEven('hello'));