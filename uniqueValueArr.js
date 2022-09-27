function uniqueVal(arr) {
    if (arr.length==0) return 0
    let i=0
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]!==arr[j]){
            arr[++i]=arr[j]
        }
    }
    return i+1
}

console.log(uniqueVal([-1,0,3,3,4,5,5,5,5,5,6,7]))