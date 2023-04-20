/**
* leetcode : 58
 * author:abrar
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let b= s.trim().split(' ')
     return(b[b.length-1].length)
 };