// maxsum of subarray with window size 3(sliding window protocol)
function subArrSum(arr,k){
  let i=0,j=0,maxSum=0,tempSum=0
  while(j<arr.length){
    if (j-i+1<k) {
      j++
    }
    tempSum=tempSum+arr[j]
    if (j-i+1===k) {
      if (i>=1) {
        tempSum-=arr[i-1]
        
      }else{
        tempSum+=arr[i]
        
      }
       
      i++
      if (maxSum<tempSum) {
        maxSum=tempSum
      }
    }
    
  }
  return maxSum
}

console.log(subArrSum([4,2,10,1,12,2,1],3))