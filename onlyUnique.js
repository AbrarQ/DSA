const arr = [1,2,5,"ab","ab",4,4,6,72,26,72]



const uniqueArr= arr.filter((ele,index)=>{
    return arr.indexOf(ele)===index;
})

console.log(uniqueArr)