const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let string = ''
  let arr = str.split('');
  let num = 1;
for(let i = 0; i < arr.length; i++) {
if(arr[i] == arr[i+1]) {
 num += 1; } else if(arr[i] != arr[i+ 1]) { if(num != 1) { string += num + arr[i];} else {
  string += arr[i];} num = 1;}

}
return string;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
