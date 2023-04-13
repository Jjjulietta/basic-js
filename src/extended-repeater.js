const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let add;
let addSep;
let num;
let sep;
let numAdd;
if(options.separator){sep = options.separator} else{ sep = '+'}
if(options.repeatTimes) {num = options.repeatTimes} else{ num = 1}
if(options.addition !== '' && String(options.addition)) {add = options.addition;} else {add = ''}
if(options.additionSeparator !== '' ) {addSep = options.additionSeparator} else {addSep = ""}
if(!options.additionSeparator && options.additionRepeatTimes) {addSep = "|"}
if(options.additionRepeatTimes) {numAdd = options.additionRepeatTimes} else{numAdd = 1}
let strAdd;
if(add || addSep) { strAdd = (add + addSep).repeat(numAdd-1) + add} else {strAdd = ''}
let string = (str + strAdd + sep).repeat(num-1) + (str + strAdd);
return string;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
