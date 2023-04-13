const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let a = arr.filter(item => item != -1)
let m = a.sort((a,b) => a-b);
let array = [];
for(let j = 0; j < arr.length; j ++) {

if(arr[j] == -1) {array.push(arr[j])} else {
let i = 0; 
if(i < m.length) {
if(arr[j] == m[0]) {array.push(arr[j])} else {array.push(m[0])}
m.splice(0, 1)}
}}
return array
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
