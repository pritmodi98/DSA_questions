//max element in the each subarray with window size
function maxSubArr(arr,k) {
    const deque=[]
    const maxValue=[]
    for (var curEle = 0; curEle < k; curEle++) {
      while(deque.length>0 && arr[curEle]>=arr[deque[deque.length-1]]){
        deque.pop()
      }
      deque.push(curEle)
    }
    
    for (var curEle = k; curEle < arr.length; curEle++) {
      maxValue.push(arr[deque[0]])
      
      while(deque.length>0 && curEle-k>=deque[0]){
        deque.shift()
      }
      
      
      while(deque.length>0 && arr[curEle]>=arr[deque[deque.length-1]]){
        deque.pop()
      }
      deque.push(curEle)
    }
    maxValue.push(arr[deque[0]])
    console.log(maxValue)
  }
  
  maxSubArr([1,2,3,1,4,5,2,3,6],3)

  //substring with k distinct character
  
  // function isCurrentWindowValid(count,k) {   
  //   let curr_u_c=0
  //   for (var i = 0; i < count.length; i++) {
  //     if(count[i]>0) curr_u_c++
  //   }
  //   return k>=curr_u_c 
  // }