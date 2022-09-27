var minimumDeletions = function(nums) {
//     const len = nums.length
//  let minI = 0
//  let maxI = 0
 
//  for (let i = 1; i < nums.length; i++) {
//      if (nums[i] > nums[maxI]) {
//          maxI = i
//      }
//      if (nums[i] < nums[minI]) {
//          minI = i
//      }
//  }
 
//  const [left, right] = minI > maxI ? [maxI, minI] : [minI, maxI]
 
//  return Math.min(
//      left + len - right + 1,
//      right+1,
//      len - left,    
//  )                               //both solutions work
   let maxIndex=0,minIndex=0
   let left,right
   for(let i=0;i<nums.length;i++){
       if(nums[i]>nums[maxIndex]){
           maxIndex=i
       } 
       if(nums[i]<nums[minIndex]){
           minIndex=i     
       }
   }
 
   if(minIndex>maxIndex){
       left=maxIndex
       right=minIndex
   }else{
       left=minIndex
       right=maxIndex
   } 

   return Math.min(nums.length-right+left+1,right+1,nums.length-left) 
};

console.log(minimumDeletions([2,10,7,5,4,1,8,6]))