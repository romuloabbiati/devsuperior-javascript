const list1 = [1, 2, 3, 4];
const list2 = [];
const names = ['MARIA', 'JOAO', 'ANABELA'];

// -------------------------------------------------------------------------
// map: apply a function to each element of an array

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

const m1 = list1.map(double);
const m2 = list1.map(triple);
const m3 = list1.map(x => x * 2);
const m4 = list1.map(x => x * 3);

console.log('MAP -----------------------------------------')
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);


// -------------------------------------------------------------------------
// filter: return a new collection that contains only those elements 
// from the original collection that satisfies a predicate (function)

function even(x) {
    return x % 2 == 0;
}

const f1 = list1.filter(even);
const f2 = list1.filter(x => x % 2 == 0);
const f3 = list1.filter(x => x > 2);

console.log('FILTER ---------------------------------------')
console.log(f1);
console.log(f2);
console.log(f3);


// -------------------------------------------------------------------------
// REDUCE: cumulatively applies a function to all elements of a 
// collection, returning the cumulative final result.
// you can inform, opcionally, a initial value as a parameter

function sum(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

const r1 = list1.reduce(sum, 0);
const r2 = list2.reduce(sum, 0);
const r3 = list1. reduce(multiply, 1);

console.log('REDUCE ---------------------------------------')
console.log(r1);
console.log(r2);
console.log(r3);


// -------------------------------------------------------------------------
// SORT: order a collection as per a comparation function 
// informed as a parameter

function compareByLength(s1, s2) {
    return s1.length - s2.length;
}
// console.log(compareByLength('JOAO', 'ANABELA'));


console.log('SORT -----------------------------------------')
const s1 = [...names].sort();
console.log(s1);

const s2 = [...names].sort(compareByLength);
console.log(s2);

const s3 = [...names].sort((x, y) => x.length - y.length);
console.log(s3);