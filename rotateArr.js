//write a program to cyclically rotate an array - rotate(arr,d) that rotates arr by d elements
function rotate(arr, val) {
    let i=0;j=arr.length-1
    const swap=(arr,i,j)=>{
      while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
      }
        
    }
    swap(arr,i,j)
    i=0
    j=val-1
    swap(arr,i,j)
    i=val
    j=arr.length-1
    swap(arr,i,j)
    
    return arr
  }
  console.log(rotate([1, 2, 3, 4, 5, 6],3))