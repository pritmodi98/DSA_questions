//find the first pair which sum is 0
function isGivenSumIsPresent(arr,sum){
    let left=0
    let right=arr.length-1
    while(left<right){
      if(arr[left]+arr[right]===sum){
        return `${arr[left]},${arr[right]}`
      }
      if (arr[left]+arr[right]>sum){
        right--
      }
      if (arr[left]+arr[right]<sum){
        left++  
      }
    }
    return false
  }
  console.log(isGivenSumIsPresent([-4,-2,-1,0,3],0))