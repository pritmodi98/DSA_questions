// function isPrimeNum(num) {
//     if (num<=1) {
//         return 'No'
//     }
//     for (let i = 2; i < num; i++) {
//         if (num%i==0) {
//             return 'No'
//         }
//     }
//     return 'Yes'
// }

// console.log(isPrimeNum(7))
//optimized approach
function isPrimeNum(num) {
    if (num<=1) {
        return 'No'
    }
    let k=Math.ceil(num**0.5)
    for (let i = 2; i <=k; i++) {
        if (num%i==0) {
            return 'No'
        }
    }
    return 'Yes'
}

console.log(isPrimeNum(6))