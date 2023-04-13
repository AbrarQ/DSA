//leetcode-9

// we can solve it either reversing the number using while, mod, num/10
// but we onverted it to string and then using a forloop we did the comparison from both ends

var isPalindrome = function(x) {
    let str= x.toString()
    let p1=str.length-1
   for(let i=0; i<str.length;i++){
       if(str[i]!=str[p1]){
           return false
       }
       p1--;
   }
    return true;
  };