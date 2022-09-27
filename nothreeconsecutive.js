//Maximum subsequence sum such that no three are consecutive
function solve(dp,arr,n) {  //done with memoisation
    if(n<0) return 0
    if(n==0) return arr[0]
    if(n==1) return arr[0]+arr[1];

    if(dp[n]!==-1) return dp[n]
    dp[n]=Math.max(solve(dp,arr,n-1),(solve(dp,arr,n-2)+arr[n]),(solve(dp,arr,n-3)+arr[n-1]+arr[n]))
    return dp[n]
}

function solveTab(dp,arr,n) {  //done with tabulation
    dp[0]=arr[0]
    dp[1]=arr[0]+arr[1]
    dp[-1]=0
    for(let i=2;i<n;i++){
        let firstCase=dp[i-1]
        let secondCase=dp[i-2]+arr[i]
        let thirdCase=dp[i-3]+arr[i-1]+arr[i]
        dp[i]=Math.max(firstCase,secondCase,thirdCase)
    }
    return dp[n-1]
}

function noConThree(arr,n=arr.length) {

    let dp=new Array(n).fill(-1)
    return solveTab(dp,arr,n)
    // ===============================
    // let dp=new Array(n).fill(-1)  
    // return solve(dp,arr,n-1)
}


console.log(noConThree([1, 2, 3, 4, 5, 6, 7, 8]))