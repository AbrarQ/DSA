/**
 *
 * leetcode-168
 * Author : Abrar
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  if(columnNumber <=0){ return 'Number cannot be less than 0'}
    let str ='';
      while(columnNumber>0){
          const num = (columnNumber - 1 )%26;
          columnNumber = Math.floor((columnNumber - 1)/26)
          str= String.fromCharCode(num+65)+str;
      }
      return str
    };
