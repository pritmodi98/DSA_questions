//write a program to cyclically rotate an array - rotate(arr,d) that rotates arr by d elements
var rotate = function(nums, k) {
  const reverse = (start, end) => {
      while(start < end){
          let tmp = nums[start];
          nums[start] = nums[end];
          nums[end] =  tmp;
          start++;
          end--;
      }
  }
  if( k > nums.length)
      k = k % (nums.length)
  reverse(0,nums.length-1)
  reverse(0, k-1);
  reverse(k, nums.length-1);
  return nums;
};
// function rotate(arr, val) {
//     let i=0;j=arr.length-1
//     const swap=(arr,i,j)=>{
//       while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++
//         j--
//       }
        
//     }
//     swap(arr,i,j)
//     i=0
//     j=val-1
//     swap(arr,i,j)
//     i=val
//     j=arr.length-1
//     swap(arr,i,j)
    
//     return arr
//   }
  console.log(rotate([1,2,3,4,5],3))