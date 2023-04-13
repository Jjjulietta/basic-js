const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
    let obj = {};
    if(domains.length == 0) {
    return {}}
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < domains.length; i++) {
    let j = domains[i].lastIndexOf('.'); let str = domains[i].slice(j);
    arr.push(str);
    let n = domains[i].lastIndexOf('.', j-1);  let str1 = str + '.' + domains[i].slice(n+1, j); 
    arr1.push(str1);
    if(n != -1) {
    let str2 = str1 + '.' + domains[i].slice(0, n); 
    arr2.push(str2)
    }}
    if(arr.every(item=> item == arr[0])) {
    
    obj[arr[0]] = arr.length;}
    if(arr1.every(item=> item == arr1[0])) {
    
    obj[arr1[0]] = arr1.length;} else { arr1.forEach(item => obj[item] = 1)}
    if(arr2.length != 0 && arr2.every(item=> item == arr2[0])) {
    
    obj[arr2[0]] = arr2.length;} else { arr2.forEach(item => obj[item] = 1)}
    
    return obj;
    
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
