function primeNum(n) {
    let arr=new Array(n+1).fill(true)
    arr[0]=false,arr[1]=false

    for (let i = 2; i*i <=n; i++) {
        
        for (let j = 2*i; j <= n; j+=i) {
            arr[j]=false
        }
    }

    for (let i = 2; i <=n; i++) {
        if (arr[i]) console.log(i)
    }
}

primeNum(16)