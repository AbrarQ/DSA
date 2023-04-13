/**
 *
 * Inthis task we are comapring strs[0][i] with other strings chars,
 * although we are using 2 for loops but the time complexity will be O(S)..S-all chars from all indexes
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0){return ""}
for(let i=0; i<strs[0].length; i++){
    const char = strs[0][i]
    for(let j=1; j<strs.length;j++){
        if(i===strs[j].length || char != strs[j][i]){
            return strs[0].substring(0,i)
        }
    }
}

return strs[0]

};