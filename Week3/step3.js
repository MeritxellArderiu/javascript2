//Write a function that would allow you to do this:
'use strict';

function createBase(val) {
    return function(x) {
        return x + val;
    };
};

const addSix = createBase(6);

console.log (addSix(10)); // returns 16
console.log (addSix(21)); // returns 27

module.exports = createBase;

