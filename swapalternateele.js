const lodash = require('lodash')
// //swap alternate element of an array
// function swapAlternate(arr) {
//     let n=arr.length
//     if (arr.length%2!=0) {
//         n=arr.length-1
//     }

//     for (let i = 0; i < n; i+=2) {
//         [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//     }
//     return arr
// }

// console.log(swapAlternate([1,3,2,7,11]))

// let array = [1, [2, 3], 2, [55, 2, 3], [2, 3, [4, 5], 6, 1], 4, 5];
// let arr=[]
// for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//         for (let j = 0; j < array[i].length; i++) {
//             arr.push(array[i][j])
//         }
//     }else{
//         arr.push(array[i])
//     }
    
// }
// const arr=lodash.flattenDeep(array)
// console.log(arr)

// let a = () => {
//     setTimeout(() => {
//       console.log("internal serval call.");
//     }, "5000");
//     console.log("One");
//   };
//   let b = () => {
//     setTimeout(() => {
//       console.log("Two");
//     }, "1000");
//     console.log("function b called");
//   };
//   console.log("Coding Test");
//   a();
//   b()
  
// console.log(array.flat(2))

let arr=[4,6,7,3,2,1,8] 
for (let i = 0; i < arr.length-1; i+=2) {
     [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
}
console.log(arr )
let row=5
for (let i = 1; i <=row; i++) {
    
        let str='',j=1
        while (j<=i) {
            str+='*'
            j++
        }
        console.log(str)
}

