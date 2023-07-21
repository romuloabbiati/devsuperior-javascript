// import * as nb from './number.js';
import { sum, round } from './number.js';
import Product from './product.js';

// const x = nb.sum(3, 4);
const x = sum(3, 4);
console.log(x);

const obj = new Product('Computer', 800.00, 10);

console.log(obj);