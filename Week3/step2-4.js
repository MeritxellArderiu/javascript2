/*2.4 Some practice with objects:

    Object Oriented Programming: Define a Constructor Function
    > Object Oriented Programming: Use a Constructor to Create Objects*/


'use strict';

function Dog() {
  // add your code here
  this.name = "Luna";
  this.color = "brown";
  this.type = "terrier";
  this. age = 5;
};

const hound = new Dog();
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;