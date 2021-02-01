if(true){
    var a = 12;
}
console.log(a);

//var는 block scope를 무시한다.
//변수 a가 if문 안에서 선어되고 초기화 되었지만
// if문 밖에서도 사용하는 것이가능
// 하지만 function 안에 선언될경우는 function 안쪽에서만 사용가능하다.

function aa() {
    var b = 12;
}

//console.log(b); // error:  b is not defined

//const는 변수 선언후 초기화르 딱한번만 할수있다.
const c = 12;
console.log(c);
//c = 13; //TypeError: Assignment to constant variable.
//console.log(c);

//let의 경우 우리가 다른 언어데서도 일반적으로 사용되는 변수를 생각하면된다.
