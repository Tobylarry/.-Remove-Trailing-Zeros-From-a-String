/**
Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.


*/

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    num = num.split('');
    for(let i = num.length- 1; i >= 0; i--){
        if(num[i] != 0){
            return num.join('').slice(0, i+1)
        }
    }
};
