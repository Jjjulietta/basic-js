const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(){
    this.reverse = false;
    if(arguments == false) {this.reverse = true}
  }
  encrypt(message, key) {
    
    if(!message || !key) { throw new Error('Incorrect arguments!')}
    let alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let matrix = [];
    let copymess = message.slice(0);
    
        let n = alfa.length;
    for(let i = 0; i < n; i++) {
       let arr = [];
       let j;
    for(j = i; j < n+1; j++) {
       if(arr.length < n && j == n) {j = 0; n = i; }
       arr.push(alfa[j]);
    
         }
    matrix.push(arr); j = i; n = alfa.length;}
    let mes = copymess.split(' ').join('');
    
    let mess = mes.slice(0, mes.length-1)
    
    let lenMes = mess.length;
    let lenKey = key.length;
    
    let keyRepit = key.slice(0) + key.substr(0, lenMes-lenKey);
    let indexKey = [];
    
    for(let char of keyRepit) {
    indexKey.push(alfa.indexOf( char.toUpperCase()));
    }
   
    let indexMessage = [];
    for(let char of mess) {
    indexMessage.push(alfa.indexOf(char.toUpperCase()));
    }
   
    let str = '';
    outer: for(let i = 0; i < indexKey.length; i++) {
    for(let j = i; j < indexMessage.length; j++) {
    
    let char = matrix[indexKey[i]][indexMessage[j]]; 
    
    str += char; continue outer;
    } }
    let messReturn = '';
    
    let arr1 = message.split(' ').map(item => item = item.length); 
    
    for(let j = 0; j < str.length; ) {
    for(let i = 0; i < arr1.length; ) {
    messReturn += str.substr(j, +arr1[i]) + ' ';
    j = j + arr1[i]; i++; 
    
    }}
    let messEncr = messReturn.trim();
    if(message.length > messEncr.length) {
    messEncr += message.slice(messEncr.length)}
    return messEncr;
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
