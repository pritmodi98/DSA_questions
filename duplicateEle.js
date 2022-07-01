//find the duplicate element in an array


function returnDuplicates(arr) {
   let map=new Map()
   for (let i = 0; i < arr.length; i++) {
     if (!map.get(arr[i])) {
        map.set(arr[i],1)
     }else{
        map.set(arr[i],map.get(arr[i])+1)
     }    
   }    
//    console.log(map)
   let result=[]
   for (const element of map) {
      console.log(element)
      if (element[1]>1) {
        result.push(element[0])
      }
   }
   return result
}

console.log(returnDuplicates([1,4,3,2,5,6,7,1,2,3,4]))