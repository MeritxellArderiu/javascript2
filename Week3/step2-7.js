'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

/* Add your explanation as a comment here:
In the function f1, x is a constant so it will always return the assigned value, which in this case is 9.
In the function f2, y is an object where the constant x, with value = 9, is used to increment the final value of the object.*/