function findUnique(arr) {
    let ans=0
    for (let i = 0; i< arr.length; i++) {
        ans=ans^arr[i]
    }
    return ans
}

console.log(findUnique([2,3,2,3,5,1,6,1,6]))