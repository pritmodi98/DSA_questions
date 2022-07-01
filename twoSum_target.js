//count distinct pairs with given sum
function countPairs(arr,target) {
    const obj={}
    for (const element of arr) {
        if (!obj[element]) {
            obj[element]=1
        }else{
            obj[element]++
        }
    }
    arr=[]
    for (const key in obj) {
        arr.push(key)
    }
    arr=arr.map(Number)
    console.log(arr)
    // const obj1={}
    // let n,count=0
    // // const indexArr=[]
    // for (let i = 0; i < arr.length; i++) {
    //     n=arr[i]
    //     if (obj1[target-n]>=0 && obj1[n] && target-n===n) {
    //         count++
    //         continue
    //     }
    //     else if (obj1[target-n]>=0 && !obj1[n]) {
    //         if (obj1[n]===0 && target-n===n) {
    //             count++
    //             continue
    //         }else if (obj1[n]===0) {
    //             continue
    //         }
    //         obj1[n]=i
    //         count++
    //     }else if (!obj1[n]) {
    //         obj1[n]=i
    //     }  
        
    // }
    // console.log(obj1)
    // return count
}
console.log(countPairs([1,5,5,5,1,2,9],10))  //ans:2