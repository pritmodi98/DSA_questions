function withoutPairs(arr) {
    const result=[]
    let map=new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }

    for (let el of map) {
        if (el[1]%2!==0) {
            result.push(el[0])
        }
    }

    return result
}

console.log(withoutPairs([6,5,5,5,2,2,6,3,1,8,3,8]))