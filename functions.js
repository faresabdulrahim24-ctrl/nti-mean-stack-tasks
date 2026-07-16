/**
 * =====================================================
 *  Day 4 — All About Functions in JavaScript
 * =====================================================
 *
 * A function is a reusable block of code.
 * You define it once, then call it many times.
 *
 * Call syntax:
 *   functionName(arguments)
 *
 * Remember:
 *   Parameters → variables in the function definition
 *   Arguments  → values you pass when you call it
 */

// =====================================================
// 1) Function Declaration
// =====================================================
// - Hoisted → you can call it before you write it
// - Has a name, parameters, body, and optional return

// console.log(add(2, 3)); // works before the definition (hoisting)

// function add(a, b) {
//   return a + b;
// }

// console.log("1) add(10, 20) =", add(10, 20));


// =====================================================
// 2) Parameters, Arguments & Default Values
// =====================================================
// Missing argument → undefined
// Default value → used when no argument is passed

// function greet(name = "Guest") {
//   console.log("2) Hello,", name);
// }

// greet("Mohamed"); // Hello, Mohamed
// greet();          // Hello, Guest


// function sumTwo(a = 0, b = 0) {
//   return a + b;
// }

// console.log("2) sumTwo(5)     =", sumTwo(5));      // 5 + 0 = 5
// console.log("2) sumTwo(5, 10) =", sumTwo(5, 10));  // 15


// =====================================================
// 3) Return vs console.log
// =====================================================
// console.log → only prints (returns undefined)
// return      → sends a value back to use later

// function printSum(x, y) {
//   console.log("3) printSum:", x + y);
//   // no return → you cannot store the result
// }


// function getSum(x, y) {
//   return x + y; // value goes back to the caller
// }

// // printSum(3, 4);            // prints 7
// var result = getSum(3, 4); // stores 7 in result
// console.log("3) result =", result);

// document.getElementById("pp").innerHTML = getSum(10, 20); // DOM example


// =====================================================
// 4) Function Calling Another Function
// =====================================================

// function average(x, y) {
//   var total = getSum(x, y); // reuse getSum
//   return total / 2;
// }

// console.log("4) average(10, 30) =", average(10, 30)); // 20


// =====================================================
// 5) Function Expression
// =====================================================
// - Function stored in a variable
// - Not hoisted like a declaration
// - Define it before you call it

// console.log(multiply(2, 3)); // Error if called before definition

// var multiply = function (a, b) {
//   return a * b;
// };

// console.log("5) multiply(4, 5) =", multiply(4, 5));


// =====================================================
// 6) Anonymous Function
// =====================================================
// Function with no name — often used as a callback

// function runTask(callback) {
//   console.log("6) Running task...");
//   callback(); // run the function passed in
// }

// runTask(function () {
//   console.log("6) Anonymous callback executed");
// });


// =====================================================
// 7) Arrow Function (ES6)
// =====================================================
// Short form of a function expression
// Note: arrow functions do not have their own this

// var functionSum =   function sum (a,b){
//   return a + b;
// }

// var arrowSum =(a,b) => a + b; 

// console.log(arrowSum(2,5));


// const divide = (a, b) => a / b;
// const square = (n) => n * n;
// const sayHi = () => console.log("7) Hi from arrow");

// console.log("7) divide(20, 4) =", divide(20, 4));
// console.log("7) square(6)     =", square(6));
// sayHi();


// =====================================================
// 8) IIFE — Immediately Invoked Function Expression
// =====================================================
// Runs right away — no need to call it later
// Good for keeping variables private


// (function () {
//   var secret = "I am private inside IIFE";
//   console.log("8) IIFE ran:", secret);
// })();

// console.log(secret); // Error — secret is not available outside


// =====================================================
// 9) Method — Function Inside an Object
// =====================================================
// A function inside an object is called a method
// this refers to the object that called the method

// var person = {
//   name: "Sara",
//   age: 22,
//   introduce: function () {
//     console.log("my Name : - " + this.age);

//   },
// };


// person.introduce();



// =====================================================
// 10) Rest Parameters (...args)
// =====================================================
// // Collects any number of arguments into an array

// function sumAll(...numbers) {
//   var total = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// console.log("10) sumAll(1,2,3,4,5) =", sumAll(1, 2, 3, 4, 5));


// =====================================================
// 11) Nested Function + Closure
// =====================================================
// Nested  = function inside another function
// Closure = inner function can use outer variables later


// function makeCounter() {
//   var count = 0; // private
//   console.log("count = ",count);

//   return function () {
//     count++;
//     return count;
//   };
// };

// var innerReturnedFunction = makeCounter();

// console.log(innerReturnedFunction());


// var counter = makeCounter();
// console.log("11) counter:", counter()); // 1
// console.log("11) counter:", counter()); // 2
// console.log("11) counter:", counter()); // 3


// =====================================================
// 12) Higher-Order Function (HOF)
// =====================================================
// A function that takes a function or returns a function
// Built-in examples: map, filter, forEach, setTimeout...

// function withGreeting(name, afterGreet) {
//   console.log("12) Hello, " + name);
//   afterGreet();
// }

// function sayBye() {
//   console.log("12) Bye!");
// }

// withGreeting("Ali", sayBye);

// Common example: array methods
// var nums = [1, 2, 3, 4];
// var doubled = nums.map(function (n) {
//   return n * 2;
// });
// console.log("12) map doubled =", doubled);
// console.log("origin array ",nums);



// =====================================================
// 13) Recursive Function
// =====================================================
// Function that calls itself
// Always need a base case to stop

// function factorial(n) {
//   if (n === 0 || n === 1) {
//  return 1
// }; // base case
//   return n * factorial(n - 1);
// }

// console.log("13) factorial(5) =", factorial(5)); // 120


// =====================================================
// 14) Callbacks with Timers
// =====================================================
// setTimeout / setInterval take a function as a callback

// setTimeout: runs once after a delay
// var timeoutId = setTimeout(function () {
//   console.log("14) setTimeout: Hello after 2 seconds");
// }, 2000);

// clearTimeout(timeoutId); // cancel before it runs

// setInterval: repeats — use clearInterval to stop it
// var ticks = 0;
// var intervalId = setInterval(function () {
//   ticks++;
//   console.log("14) setInterval tick:", ticks);

//   if (ticks === 3) {
//     clearInterval(intervalId); // stop repeating
//     console.log("14) interval cleared");
//   }
// }, 1000);


// =====================================================
// 15) Mini Challenge
// =====================================================
/*
  1) Write isEven(n) → returns true if the number is even
  2) Write maxOfThree(a, b, c) → returns the largest number
  3) Write an arrow function filterOdds → keep only odd numbers from an array
  4) Make a countdown from 5 to 0 with setInterval, then print "Done!"
*/


// =====================================================
// Quick Cheat Sheet
// =====================================================
/*
  Declaration   → function name() {}         (hoisted)
  Expression    → var f = function() {}      (not hoisted the same way)
  Arrow         → const f = () => {}         (no own this)
  IIFE          → (function(){})()           (runs immediately)
  Method        → obj.method = function(){}  (this = object)
  Callback      → fn(function(){})           (passed as argument)
  HOF           → takes / returns a function
  Rest          → function f(...args) {}
  Recursion     → function calls itself + base case
*/

console.log("===== FUNCTIONS DEMO — LOADED (timers may still run) =====");
