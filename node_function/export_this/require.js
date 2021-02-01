console.log('require가 가장 위에 오지않아도 됩니다.');
require('../module/var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main 입니다.');
console.log(require.main === module);
console.log(require.main.filename);
