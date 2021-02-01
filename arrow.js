function add1(x, y) {
    return x + y;
}

const add2 = (x,y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

//위의 4개의 함수는 모두 같은 기능을 가지고있다.
//{}후 바로 값을 return할경우 화살표 함수를 더 간략하게 만들수있다. ex add3, add4

console.log(add1(1, 2), typeof add1); //3 function
console.log(add2(1, 2), typeof add2); //3 function
console.log(add3(1, 2), typeof add3); //3 function
console.log(add4(1, 2), typeof add4); //3 function