function solveTab(arr,n=arr.length){
    const dp=new Array(n).fill(-1)
    dp[0]=arr[0]
    dp[1]=arr[1]
    let include,exclude
    
    for(let i=2;i<n;i++){
        include=dp[i-2]+arr[i]
        exclude=dp[i-1]
        dp[i]=Math.max(include,exclude)
        console.log(dp)
    }
    return dp[n-1]
}

let ans=solveTab([9,9,8,7])
console.log(ans)

// const funcA=async()=>{
//     await p;
//     console.log('A')
//     console.log('B')
// }

// const funcB=async()=>{
//     await q;
//     console.log('C')
//     console.log('D')
// }

// funcA()
// funcB()