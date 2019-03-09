/*2.6 We did some work with arrays:

const arr = [1, 2, 3];

We can also nest arrays inside arrays like this:

const arr2d = [[1, 2], [3, 4], [5, 6]];

(for math people you can think of this as a matrix)

How would you flatten out all the items of an array with 2 dimensions into a one-dimensional array? Flattening out the arr2d array above would result in:

const flattenedArr = [1, 2, 3, 4, 5, 6];

How about 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it.)*/

'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let my2dArr = [];
function flattenArray2d(arr) {
    // Replace this comment and the next line with your code
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[i].length; j++) {
        my2dArr.push(arr2d[i][j]);
        }
    }
    return my2dArr;
};


let my3dArr = [];
function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
  for (let i = 0; i < arr3d.length; i++) {
    for (let j = 0; j < arr3d[i].length; j++) {
      for (let k = 0; k < arr3d[j].length; k++) {
        my3dArr.push(arr3d[i][j][k]);
      }
    }
  }
  return my3dArr;
};

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};