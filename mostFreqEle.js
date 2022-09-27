//returned the most frequent element in the array
function mostfrequent(arr) {
    const map=new Map()
    let max=1
    for (const element of arr) {
        if (!map.get(element)) {
            map.set(element,1)
        }else{
            map.set(element,map.get(element)+1)
        }
    }
    console.log(map)
    for (const key of map) {
        if (key[1]>1 && key[1]>max) {
            max=key[1]
            element=key[0]
        }
    }
    return element  
}
console.log(mostfrequent([1,1,2,2,2]))