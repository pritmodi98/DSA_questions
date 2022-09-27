function checkSquare(arr1,arr2) {
    let obj1={},obj2={}
    
    for (let el of arr1) {
       obj1[el]=(obj1[el] || 0) + 1
    }
    
    for (let el of arr2) {
       obj2[el]=(obj2[el] || 0) + 1
    }
    
    for (let key in obj1) {
       if (obj2[key*key]!=obj1[key]) return false
    }
    
    return true
 }
 
 console.log(checkSquare([2,4,5,4],[16,16,25,4]))