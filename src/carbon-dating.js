const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(!sampleActivity || isNaN(sampleActivity) || typeof sampleActivity !== 'string' || !parseInt(sampleActivity) || Number(sampleActivity) > 15 || Number(sampleActivity < 0 )) {return false}
let MODERN_ACTIVITY = 15
let INICIAL_ACTIVITY = Number(sampleActivity);
let HALF_LIFE_PERIOD = 5730
let p = 0.693

let k;
k = p/HALF_LIFE_PERIOD;
let t;
t = Math.log(MODERN_ACTIVITY/INICIAL_ACTIVITY)/k;
return Math.ceil(t);
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
