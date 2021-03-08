/*

Instructions:
For each example, write what will print to the console.

*/
/***** Problem 1 *****/
console.log(5 < 9); // print: true
console.log(5 > 9); // print: false
console.log(10 >= 7); // prints: true
console.log(10 >= 10); // prints: true

/***** Problem 2 *****/

console.log(2 === 2); // prints: true
console.log(2 === 2.1); // prints: false
console.log(2 !== 2.1); // prints: true

/***** Problem 3 *****/
console.log('potato' === 'potato'); // print: true
console.log('a' < 'b'); // print: true
console.log('z' > 'b'); // print: true
console.log('cat' < 'zoo'); // print: true
console.log('cat' < 'banana'); // print: false
console.log('app' < 'apple'); // print: true

/***** Problem 4 *****/
let number = 10;
let isEven = number % 2 === 0;
console.log(isEven); // prints: true

let number2 = 13;
let isEven2 = number2 % 2 === 0;
console.log(isEven2); // prints: false

/***** Problem 5 *****/
console.log(5 === '5'); // prints: false
console.log(5 == '5'); // prints: true

/* 
Should we use double equals or triple equals?
We should triple equals more.
*/
