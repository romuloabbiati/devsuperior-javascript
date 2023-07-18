console.log(`Arithmetic operators:`);
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 3 = ${19 / 3}`);
console.log(`19 % 5 = ${19 % 5}`);
console.log(`3 ** 4 = ${3 ** 4}`);

console.log(``);

console.log(`Comparative operators:`);
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);

console.log(``);

console.log(`Comparative operators of equality`);
console.log('3' == 3); // true
console.log('4' == 3); // false
console.log(`'' == false: ${'' == false}`);
console.log(`'' === false: ${'' === false}`);
console.log(`'17' == 17: ${'17' == 17}`);
console.log(`'17' === 17: ${'17' === 17}`);

console.log(``);
const x = 'Maria';
const y = 'Maria';
const a = new String('Maria');
const b = new String('Maria');
console.log(`const x = 'Maria'`);
console.log(`const y = 'Maria'`);
console.log(`const a = new String('Maria')`);
console.log(`const b = new String('Maria')`);

console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typeof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);

console.log(``);

console.log(`Logic Operators`);
console.log(`(10 > 5) && (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`(10 > 5) && (10 < 20): ${(10 > 5) && (10 < 20)};`)
console.log(`(10 > 5) || (10 > 20): ${(10 > 5) || (10 > 20)}`);
console.log(`(10 < 5) || (10 > 20): ${(10 < 5) || (10 > 20)}`);
console.log(`!(10 > 5): ${!(10 > 5)}`);