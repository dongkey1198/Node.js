const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

console.log(timeout.setTimeout);

const hello = setInterval(() => {
    console.log('hello world!!!');
}, 2000);


const timeout2 = setTimeout(() => {
    clearInterval(hello);
    console.log('종료');
}, 1000 * 10);

console.log(timeout2.setTimeout);

const aaa = setImmediate(() => {
    console.log('immediate');
});

console.log(aaa.setImmediate);
