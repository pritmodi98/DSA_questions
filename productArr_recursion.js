//return product of array by using recursion
function product(arr,index){
    if (index<=0) {
      return -1
    }
    if (index===1) {
      return arr[0]
    }
    return arr[index-1]*product(arr,index-1)
  }
  
  console.log(product([2,5,4,3,2],0))