let n=50

function isPrime(num) {
    
    if (num==0 || num==1) return false

    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            return false
        }
    }
    return true
}
for (let i = 0; i <=n; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}