function countDivisible(arr) {
    let i=0,j=1,count=0
    while (i<arr.length-1) {
        if (arr[i]%arr[j]==0 || arr[j]%arr[i]==0) {
            count++
        }
        j++
        if (j==arr.length) {
            i++
            j=i+1
        }
    }
    return count
}

console.log(countDivisible([2,3,5,7]))