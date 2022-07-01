function merge(arr1,arr2) {
    let resultArr=[]
    let i=0,j=0
    while (i<arr1.length && j<arr2.length) {
        if (arr1[i]<=arr2[j]) {
            resultArr.push(arr1[i])
            i++
        }else{
            resultArr.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        resultArr.push(arr1[i])
        i++
    }

    while (j<arr2.length) {
        resultArr.push(arr2[j])
        j++
    }
    return resultArr
}

function mergeSort(arr) {
    // 
    
    if (arr.length<=1) {
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}

// Merge function from earlier
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// // Recrusive Merge Sort
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// // mergeSort([10,24,76,73])

console.log(mergeSort([10,24,76,73,72,1,9]))

// function merge(resultArr,start,mid,end) {
//     let arr1=[]
//     let arr2=[]

//     let lenArr1=mid-start+1
//     let lenArr2=end-mid

//     //copy the data in the respective arrays
//     for (let i = 0; i < lenArr1; i++) {
//         arr1[i]=resultArr[start+i]
//     }
//     for (let j = 0; j < lenArr2; j++) {
//         arr2[j]=resultArr[mid+1+j]
//     }

//     let a=0 //index of arr1
//     let b=0 //index of arr2
//     let c=start  //index of result array

//     while (a<lenArr1 && b<lenArr2) {
//         if(arr1[a]<=arr2[b]){
//             resultArr[c]=arr1[a]
//             a++
//         }else{
//             resultArr[c]=arr2[b]
//             b++
//         }
//         c++
//     }
// }
