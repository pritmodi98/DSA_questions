function maxSum(arr) {
    let first=arr[0],second=arr[1]
    if (second>first) {
        first=arr[1]
        second=arr[0]
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i]>=first) {
            second=first
            first=arr[i]
        }

        else if (arr[i]>second) {
            second=arr[i]
        }
        
    }
    return first+second
}

console.log(maxSum([12,4,67,2,34,67]))