const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let months = ['winter', 'spring', 'summer', 'autumn'];
 

if(!(date)) {return 'Unable to determine the time of year!'} else 
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {throw new Error('Invalid date!')}
   else if (date instanceof Date){
    let month = date.getMonth();
    if(month < 2 || month > 10) {return 'winter'}
    if(month < 5 && month > 1) {return 'spring'}
    if(month < 8 && month > 4) {return 'summer'}
    if(month < 11 && month > 7) {return 'autumn'}
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
