//find the pair in array whose sum is closest to x
function sumClosest(arr,k) {
    let min=Math.pow(10,10)
    let i=0,j=arr.length-1
    let result=[]
   
    while(i<j){
      
        if ((Math.abs(arr[i]+arr[j]-k))<min) {
          result=[arr[i],arr[j]]
          min=Math.abs(arr[i]+arr[j]-k)
        }
        
        
        if(arr[i]+arr[j]-k>0){
          j--
        }else if(arr[i]+arr[j]-k<0){
          i++
        }
      
    }

    return result
  }
  
  console.log(sumClosest([1,2,8,9,14],12))
  