//Smallest window that contains all characters of string itself
function minWindow(str) {
  let mapStr={}
  let distinct=0
//freq counting of characters
  for (const el of str) {
    if (mapStr[el]) {
      mapStr[el]++
    }else{
      mapStr[el]=1
      distinct++
    }
  }
  //console.log(distinct)

  //doing the operations on the window
  let mapWindow={}
  let i=0
  let j=0
  let count=0
  let minLength=str.length
  let minStr=""
  while (j!=str.length) {
    if (mapWindow[str[j]]) {
      mapWindow[str[j]]++
    }else{
      mapWindow[str[j]]=1
      count++
    }
    //when condition is false;we increase the window size
    if (count<distinct) {
      j++
    }else if (count===distinct) {  //when condition is true
      
       while (count===distinct) {
         if (minLength>j-i+1) {
           minLength=j-i+1
           minStr=str.slice(i,j+1)
          //  console.log(minStr)
         }
         mapWindow[str[i]]--
         if (mapWindow[str[i]]===0) {
            count--
         }
         i++
       }
       j++
    }
  }
  return minStr
}
console.log(minWindow('aaabdccbdabc'))
// function smallestSubstringLen(str) {
//     let count=[]
//     let start=0,end=0
//     let uniqueChar=0
//     let substrLen=0
//     for (var i = 0; i < str.length; i++) {
//       count[i]=0
//     }
    
//     for (var i = 0; i < str.length; i++) {
//       if(i===0 && count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0){
//         count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
//         uniqueChar++
//         substrLen++
//         continue
//       }
//       if (count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0) {
//         uniqueChar++
//       }
//       count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
//       substrLen++
//       end++
//     }
//     while (count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]!==1) {
//       start++
//       count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]--
//       substrLen--
//     }
//     while(count[str[end].charCodeAt(0)-'a'.charCodeAt(0)]!==1){
//       end--
//       count[str[end].charCodeAt(0)-'a'.charCodeAt(0)]--
//       substrLen--
//     }
//     return substrLen
//  }
 
//  console.log(smallestSubstringLen('aabbcc'))