var removeAnagrams = function(words) {
    
    let i=1
    while(i<words.length){
        let map={}
        var word=words[i]
        var word2=words[i-1]
        var flag
        var j=0
        if(word.length!==word2.length){
            i++
            continue
        }
        while(j<word.length){
            if(map[word[j]]){
                map[word[j]]++
            }else{
                map[word[j]]=1
            }
            j++
        }
        // console.log(map)
        j=0
        
     
        while(j<word2.length){
            if(!map[word2[j]]){
                flag=false
                break
            }else{
                map[word2[j]]-=1
                flag=true
            }
            j++
        }
        // console.log(map)
        // console.log(flag)
        if(flag){
            words.splice(i,1)
            i=1
        }else{
            i++
        }
        // console.log(words)
   }
   return words 
};

console.log(removeAnagrams(["abbb","aaab"]))