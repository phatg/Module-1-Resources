/*

Instructions: 
For each example, write what will print to the console or answer the question.

*/

/***** Problem 1 *****/
let location = 'New York';
/* 
The line above is an example of Variable...
  A: Declaration
  B: Initialization B
  C: Assignment

*/
console.log(location); // prints: New York
console.log(location[1]); // prints: 'e' <- More on this TOMORROW

/***** Problem 2 *****/
let location;
/* 
The line above is an example of Variable...
  A: Declaration A
  B: Initialization
  C: Assignment
*/

location = 'SF';
/* 
The line above is an example of Variable...
  A: Declaration
  B: Initialization
  C: Assignment C

*/

console.log(location); // prints: SF
/***** Problem 3 *****/

let age = 0;
age + 5; // no assignment used
console.log(age); // prints: 0
age = age + 5; // assignment is used
console.log(age); // prints: 5
age += 5; // assignment is used, this is shorthand
console.log(age); // prints: 5
age++; // assignment is used, increment
console.log(age); // prints: 1
age--; // assignment is used, decrement
console.log(age); // prints: -1

/***** Problem 4 *****/
let food;
console.log(food); // prints: undefined
console.log(food + 4); // prints: NaN
console.log('2' + 2); // prints: 22
