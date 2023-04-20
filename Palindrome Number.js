/**
 * leetcode : 9
 * Author : Abrar
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y= x;
    let rev =0;

    while(y>0){
        rev = (rev*10)+(Math.floor(y%10));
        y=Math.floor(y/10)
    }

    return (x-rev === 0) ? true : false;
  };