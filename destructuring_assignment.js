//구조분해 할당

const example ={a: 123, b: {c: 135,  d: 146}};

// const a = example.a;
// const d = example.b.d;

// console.log(a);
// console.log(d);

const {a, b:{d}} = example;
console.log(a); //123
console.log(d); //146

const arr = [1,2,3,4,5];

const[x,y,,,z] = arr;

console.log(x);
console.log(y);
console.log(z);


