const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) {throw new Error(`'arr' parameter must be an instance of the Array!`)}
  let arr1 = Array.from(arr)
 
 for(let i = 0; i < arr1.length; i++){
  if(arr1[i] == '--discard-next'){
console.log(arr1[i]); console.log(arr1[i+2]);
   if(i == arr1.length-1){ arr1.splice(i, 1); }
else if(arr1[i+2] == '--discard-prev' || arr1[i+2]  == '--double-prev') { arr1.splice(i, 3);}  else {
  arr1.splice(i, 2); } 
 /* return arr1;*/
  }
  if(arr[i] == '--discard-prev') {
console.log(arr1[i]); console.log(arr1[i-2]);
  if(i == 0 ) {arr1.splice(i, 1)}
else if( arr1[i-2] == '--double-next'|| arr1[i-2] == '--discard-next') {arr1.splice(i-2, 3)} else {
  arr1.splice(i-1, 2);} /* return arr1;*/
  
  }
  if(arr1[i] == '--double-next') {
console.log(arr1[i]); console.log(arr1[i+1]);
if(i == arr1.length-1) { arr1.splice(i, 1)}
 else { console.log(arr[i+1]); console.log(arr1);
      arr1.splice(i, 1, arr[i+1]); console.log(arr1);}/* return arr1; */}
  if(arr[i] == '--double-prev') {
console.log(arr1[i]); console.log(arr1[i-1]);
if(i == 0) {arr1.splice(i, 1)} else { console.log(arr[i]); console.log(arr1);
  arr1.splice(i, 1, arr[i-1]);  console.log(arr1)} /*return arr1;*/
      
  } continue;}
  return arr1; 
  
  // remove line with error and write your code here
}

module.exports = {
  transform
};
