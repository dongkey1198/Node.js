
const {odd, even} = require('./var.js');

function checkOddorEven(number){
    if(number%2){
        return odd;
    }else{
        return even;
    }
}

console.log(checkOddorEven(4));

module.exports = checkOddorEven;
