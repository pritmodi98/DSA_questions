//to find the unique element count and element
function uniqueEle(arr) {
    let map=new Map()
    let unique=0
    for (let el of arr) {
       if (!map[el]) {
          map[el]=1
       }else{
          map[el]++
       }
    }
    
    let uniqueEl=[]
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]===1 && !uniqueEl.includes(arr[i])) {
            unique++
            uniqueEl.push(arr[i])
        }
    }
    return `count:${unique} ,unique_Element:${uniqueEl}` 
}

console.log(uniqueEle([1,2,1,2,3,1,6,4,2,4,9,5,2,1,2,4,5,3,2,5,10,5]))