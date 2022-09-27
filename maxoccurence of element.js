//to find max occurence of element
function maxOccur(arr){
    const obj={}
    let maxOccurence=0; maxOccurenceChar=null
    for (var i = 0; i < arr.length; i++) {
      if(obj[arr[i]]){
        obj[arr[i]]+=1
      }else{
        obj[arr[i]]=1
      }
      if (maxOccurence<obj[arr[i]]) {
        maxOccurence=obj[arr[i]]
        maxOccurenceChar=arr[i]
      }
      
    }
    console.log(maxOccurenceChar,'==>',maxOccurence)
  }

  maxOccur([3,5,6,3,3,1,5,6,1,2,5,1,0,4,3,0])