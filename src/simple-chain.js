const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    if(this.chain.length) {return this.chain.length} else{return}
    // remove line with error and write your code here
  },
  addLink(value) {
   if(value !== 'undefined') {this.chain.push(`( ${value} )`)} else if(!value){ this.chain.push('(  )')}
   return this;
   
    // remove line with error and write your code here
  },
  removeLink(position) {
   
    let i = position-1;
    if(typeof i !== 'number' || i < 0 || i >= this.chain.length || i%1 !== 0) {  this.chain = []; throw new Error("You can\'t remove incorrect link!");
    } else {this.chain.splice(i, 1)}
  return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    if(this.chain) {this.chain.reverse()}
    return this;

    // remove line with error and write your code here
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
   
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
