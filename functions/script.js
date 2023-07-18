function sum1(num1, num2) {
    return num1 + num2;
}

const sum2 = function(num1, num2) {
    return num1 + num2;
}

const sum3 = (num1, num2) => {
    return num1 + num2;
}

const sum4 = (num1, num2) => num1 + num2;

const double1 = function(num) {
    return num * 2;
}

const double2 = num => num * 2;

// function that does not have a return, by default
// this kind of function returns UNDEFINED
function showPrice(price) {
    console.log(`PRICE: ${price}`);
}

// Variables defined within the function scope, 
// will only work within the function scope

function circleArea(radius) {
    const pi = 3.14;
    return 2 * pi * radius;
}

// FUNCTION HOISTING: functions in JS will be moved to the top of the 
// file and then the other code lines will be executed
function test(x) {
    console.log('TEST = ' + x);
}

test(10);

// FUNCTIONS can be passed as arguments to other FUNCTION

function triple(num) {
    return num * 3;
}

function apply(f, num) {
    const result = f(num);
    console.log(`RESULT = ${result}`);
}

apply(triple, 10);
apply(double1, 10);

