const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key : 'value'
        },
    },
};
console.time('runtime');
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있다.');
console.log(string, number, boolean, obj.outside.inside.key);
console.error('error 메세지');
console.table([{name: 'kim', birth: 1994}, {name: 'park', birth: 1998}]);
console.dir(obj, {color: false, depth: 2});
console.dir(obj, {color: true, depth: 1});

console.time('시간 측정');
for(let i = 0; i < 10000; i++){}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러위치 추적');
}

function a() {
    b();
}
a();
console.timeEnd('runtime');