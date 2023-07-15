/*
console.log("A literal string can be used within a double quotes");
console.log('A literal string can be used within a single quotes');
console.log(`A literal string can be used within a backticks`);

console.log('Concatenation and interpolation');
const num = 14.5;
console.log("The price of the product is " + num);
console.log('The price of the product is ' + num);
console.log(`The price of the product is ${num}`);

console.log("Conversion between number and string");

const str1 = num.toString();
console.log(`Type of ${str1} is ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Type of ${str2} is ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Type of ${num1} is ${typeof num1}`);

const num2 = parseInt("14.5");
console.log(`Type of ${num2} is ${typeof num2}`);

const num3 = parseInt("21", 10);
console.log(`Type of ${num3} is ${typeof num3}`);

const num4 = parseInt("21", 16);
console.log(`Type of ${num4} is ${typeof num4}`);

const num5 = parseFloat("14.5", 10);
console.log(`Type of ${num5} is ${typeof num5}`);
*/

const str = "Maria Silva  ";

console.log(`"const str = "Maria Silva  "`);

console.log(`toLowerCase: ${str.toLowerCase()}`);

console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);
console.log(`charAt: ${str[3]}`);

console.log(`replace: ${str.replace("i", "$")}`);
console.log(`replace: ${str.replace(/i/g, "$")}`);

console.log(`length: ${str.length}`);

console.log(`indexOf: ${str.indexOf("i")}`);

console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3, 8)}`);

const data = "15/07/2023";
const mes = data.substring(3, 5);
console.log(mes);

const value = 200.99;
const newValue = value.toString().replace('.', ',');
console.log(newValue);

console.log(`trim: ${str.trim()}`);