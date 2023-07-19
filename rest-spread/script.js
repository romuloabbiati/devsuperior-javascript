// REST: comma delimited arguments => array

function sum(...numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

const result1 = sum(1, 2, 3, 4);
console.log(result1);

const result2 = Math.max(2, 9, 5, 3);
console.log(result2);

// SPREAD: transform an array to a comma delimited list of arguments

const myNumbers = [2, 3, 10, 5];

const result3 = Math.max(...myNumbers);

console.log(result3);

// SPREAD: can also be used for objects. Transform object properties 
// into a comma delimited list

const item = {
    description: "Computer",
    price: 2000.00,
    quantity: 1
}

const clonedItem = { ...item, weight: 10 };

console.log(clonedItem);