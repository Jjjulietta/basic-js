const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let n = email.lastIndexOf('@');
let domen = email.slice(n+1)
return domen;
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
