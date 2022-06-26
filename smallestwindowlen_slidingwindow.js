//Smallest window that contains all characters of string itself
function smallestSubstringLen(str) {
    let count=[]
    let start=0,end=0
    let uniqueChar=0
    let substrLen=0
    for (var i = 0; i < str.length; i++) {
      count[i]=0
    }
    
    for (var i = 0; i < str.length; i++) {
      if(i===0 && count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0){
        count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
        uniqueChar++
        substrLen++
        continue
      }
      if (count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0) {
        uniqueChar++
      }
      count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
      substrLen++
      end++
    }
    while (count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]!==1) {
      start++
      count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]--
      substrLen--
    }
    while(count[str[end].charCodeAt(0)-'a'.charCodeAt(0)]!==1){
      end--
      count[str[end].charCodeAt(0)-'a'.charCodeAt(0)]--
      substrLen--
    }
    return substrLen
 }
 
 console.log(smallestSubstringLen('aabbcc'))