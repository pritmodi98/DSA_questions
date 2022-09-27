let arr1=[1,1,1,2,2,3,3,3],arr2=[3,3,3,4],res=[]
let ptr1=0,ptr2=0

while (ptr1<arr1.length || ptr2<arr2.length) {
    //skip duplicate
    while (ptr1>0 && ptr1<arr1.length && arr1[ptr1]===arr1[ptr1-1]) {
        ptr1++
    }
    while (ptr2>0 && ptr2<arr2.length && arr2[ptr2]===arr2[ptr2-1]) {
        ptr2++
    }

    //if array exhaust
    if (ptr1>=arr1.length) {
        res.push(arr2[ptr2])
        ptr2++
        continue
    }
    if (ptr2>=arr2.length) {
        res.push(arr1[ptr1])
        ptr1++
        continue
    }

    //comparision
    if (arr1[ptr1]<arr2[ptr2]) {
        res.push(arr1[ptr1])
        ptr1++
    }else if (arr1[ptr1]>arr2[ptr2]) {
        res.push(arr2[ptr2])
        ptr2++
    }else{
        res.push(arr1[ptr1])
        ptr1++
        ptr2++
    }
}

console.log(res)
