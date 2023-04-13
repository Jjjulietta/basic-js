const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
let arr =  String(n).split('');
if( arr[0] < arr[1]) {arr.splice(0, 1)} else {
let min = arr[0];
let index = 0;
for(let i = 0; i < arr.length; i++) {
if(arr[i] < min) { min = arr[i], index = i}}
arr.splice(index, 1);}
return +arr.join('');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
