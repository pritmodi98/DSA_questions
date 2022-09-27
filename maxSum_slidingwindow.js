// maxsum of subarray with window size 3(sliding window protocol)
function subArrSum(arr,k){
  let maxSum=0,tempSum=0
  
  if (k>arr.length) {
     return 'window size should be smaller than array length'
  }

  for(let i=0;i<k;i++){
      maxSum+=arr[i]
  }
  
  tempSum=maxSum
  for(let i=k;i<arr.length;i++){
      tempSum=tempSum -arr[i-k]+arr[i]
      if(tempSum>maxSum) maxSum=tempSum
  }
  return maxSum

}

console.log(subArrSum([4,2,10,1,12,2,1],3))
  