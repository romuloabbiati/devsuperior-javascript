// ARRAY'S LENGTH
const values = ['Maria', 37, false, 1.64];
const t1 = values.length;
console.log('Length test');
console.log(t1);

// REMOVING ELEMENTS
const names = ['Mary', 'John Doe', 'Maxwell Wilson', 'Mark'];
const r1 = names.pop();

console.log('Pop test');
console.log(r1);

const r2 = names.shift();
console.log('Shift test');
console.log(r2);

console.log(names);

// INSERTING ELEMENTS
const heights = [1.65, 1.82, 1.70];

console.log('Push test');
heights.push(1.93);

console.log(heights);

console.log('Unshift test');
heights.unshift(1.97);

console.log(heights);

// GENERAL INSERTING AND REMOVING ELEMENTS
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
letters.splice(2, 0, 'X', 'Y');
console.log('Splice test');
console.log(letters);

// CONCATENATING ARRAYS
const girls = ['Mary', 'Anna'];
const boys = ['John', 'Maxwell'];

const boysAndGirls = girls.concat(boys);
console.log(boysAndGirls);

// ACCESSING AND ASSIGNING VALUES
const ages = [20, 30, 40, 50];

ages[1] = 38;

console.log('Accessing & Assigning values');
console.log(ages);

// LOOP THROUGH AN ARRAY
const fruits = ['banana', 'orange', 'apple'];
console.log('Loop through an array test');
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('Loop through an array with forEach test');
fruits.forEach(fruit => {
    console.log(fruit);
});