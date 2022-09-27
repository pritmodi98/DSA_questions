//we have given arrays as input containing 0's and 1's ,we need to sort the array.
function sort01(arr) {
    let count0=0,count1
    let curr=0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===0) {
            count0++
        }
    }
    count1=arr.length-count0
    while (count0>0) {
        arr[curr]=0
        curr++
        count0--
    }
    while (count1>0) {
        arr[curr]=1
        curr++
        count1--
    }
    return arr
}

// function sort01(arr) {
//     let left=0,right=arr.length-1
    
//     while (left<right) {
//         while (arr[left]===0 && left<right) {
//             left++
//         }
//         while (arr[right]===1 && left<right)  {
//             right--
//         }

//         if (left<right) {
//             [arr[left],arr[right]]=[arr[right],arr[left]]
//         }  
        
//     }
//     return arr
// }

console.log(sort01([1,0,0,0,0,0,0,0,1]))