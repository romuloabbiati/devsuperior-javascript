function sayHello() {
    console.log("Hello");
}

// setTimeout(sayHello, 2000);

function sayGoodMorning(name) {
    console.log("Good Morning, " + name);
}

setTimeout(() => {
    sayGoodMorning('Romulo');
    setTimeout(() => {
        sayGoodMorning('Isabela');
        setTimeout(() => {
           sayGoodMorning('Rosi');
        }, 2000);
    }, 2000);
}, 2000);

console.log('A');
console.log('B');