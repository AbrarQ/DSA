function fibonacciSeries(n){
    const val= [0,1]

    for(let i =2; i < n;i++){
        val.push(val[i-1]+val[i-2])
    }
    return val
}

console.log(fibonacciSeries(10))