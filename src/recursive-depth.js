const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
 constructor(array){
    this.array = array;
    this.depth = 0;
  }
  calculateDepth(arr) {
   /*if(depth > this.depth) {this.depth = depth}*/
let sum = 0;
for(let item of arr) {
  if(Array.isArray(item)) {
sum = Math.max(sum, this.calculateDepth(item))}
  }
return 1 + sum;
    
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
