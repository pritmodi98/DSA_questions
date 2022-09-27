function secondFreqCal(arr) {
    let obj1={}
    let firstLarge=0,secondLarge,element
    for (const el of arr) {
        obj1[el]=obj1[el]+1 || 1
    }

    for (const el in obj1) {
        if (obj1[el]>firstLarge) {
            secondLarge=firstLarge
            firstLarge=obj1[el]
        }else if (obj1[el]>secondLarge && obj1[el]!==firstLarge) {
            secondLarge=obj1[el]
            element=el
        }
    }
    if (secondLarge===0) {
        return 'No second largest frequency is there'
    }
    return element
}
console.log(secondFreqCal([1,1,3,3]))