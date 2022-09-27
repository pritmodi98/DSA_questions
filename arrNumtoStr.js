function generateString(num) {
    const alphabets='abcdefghijklmnopqrstuvwxyz'
    let finalStr='',curEl=0
    for (let i =curEl; i <num; i++) {
        finalStr+=alphabets[i%26]
    }  
    return finalStr
}

function encodeNumberWithCharOptimally(arr) {

    let maxNumber=Math.max(...arr) //[1,7,7]
    let encodeArr=['']

    for (let i = 1; i <=maxNumber; i++) {
        encodeArr.push(generateString(i))
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i]=encodeArr[arr[i]]
    }
    console.log(encodeArr)
    return arr
}

// function encodeNumberWithChar(arr) {
//     for (let i = 0; i < arr.length; i++) {   //[1,7]
//         arr[i]=generateString(arr[i])
//     }
//     return arr
// }
console.log(encodeNumberWithCharOptimally([2,5,3,4,5,6]))