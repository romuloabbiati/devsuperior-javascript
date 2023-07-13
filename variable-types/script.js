const x = 10;

if(x > 0) {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log('Logging within the if statement');
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log('Logging outside of the if statement');
console.log(a);
// console.log(b);
// console.log(c);

for(let i = 0; i < 5; i++) {
    console.log(i);
}