// const secretID = process.env.SECRET_ID;
// const secretCODE = process.env.SECRET_CODE;

// console.log(secretID);
// console.log(secretCODE);

//process.nextTick(콜백)

setImmediate(() => {
    console.log('immediate');
});

process.nextTick(()=> {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('time out');
}, 0);

Promise.resolve().then(( () => console.log('promise')));

let i = 1;
setInterval(() => {
    if(i === 5) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i += 1;
}, 1000);
