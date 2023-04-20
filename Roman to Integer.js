/**
 * leetcode: 13
 * Author : abrar
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map= {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let sum =0
    let n = s.length
    for( let i=0; i< n;i++){
        let curr = map[s[i]]
        let next = map[s[i+1]]
        if(curr < next){
            sum+= next-curr
            i++
        } else {
            sum+= curr
        }
    }
    return sum
};