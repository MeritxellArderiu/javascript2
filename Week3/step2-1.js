/*2.1 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.*/

'use strict';

function foo(func) {
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;