/**
 * leetcode :28
 * author:abrar
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if(haystack.length==0 || needle.length == 0){
        return -1 }

    if(haystack.length<needle.length){
        return -1; }
    for(let  i =0; i <=haystack.length-needle.length;i++){
        if( haystack.substring(i,needle.length+i)==needle){
            return i
        }
    }

    return -1
};