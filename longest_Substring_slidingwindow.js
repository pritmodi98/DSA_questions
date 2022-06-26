//longest substring with unique characters
function isCurrentWindowValid(count) {
    for (var i = 0; i < count.length; i++) {
      if (count[i]>1) {
        return false
      }
    }
    return true
  }
  
  function longestUniqueletterSub(str) {
    let count=[]
    let start=0,end=0
    let maxWindowSize=0,maxWindowStart=0
    for (var i = 0; i < 26; i++) {
      count[i]=0
    }
    // console.log(count)
    
    for (var i = 0; i < str.length; i++) {
      if (i===0) {
        count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
        maxWindowSize=1
        continue
      }
      count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++
      end++
      
      while(!isCurrentWindowValid(count) ){
        count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]--
        start++
      }
      
      if (end-start+1>maxWindowSize) {
        maxWindowSize=end-start+1
        maxWindowStart=start
      }
    }
    console.log(maxWindowStart,maxWindowSize)
    
    let resultStr=''
    for (var i = maxWindowStart; i < maxWindowStart+maxWindowSize; i++) {
      resultStr+=str[i]
    }
    console.log(resultStr)
  }
  
  longestUniqueletterSub('abcb')