//reverse array without using extra array.
function reverseArr(arr) {
    let i=0,j=arr.length-1
    while (i<j) {
      arr[i]=arr[i]+arr[j]
      arr[j]=arr[i]-arr[j]
      arr[i]=arr[i]-arr[j]
      i++
      j--
    }
    return arr
  }
  console.log(reverseArr([12,4,67,2,34]))
       OR
  //reverse array withou using extra array.
  function reverseArr(arr) {
    let i=0,j=arr.length-1
    const swap=(arr,i,j)=>([arr[i],arr[j]]=[arr[j],arr[i]])
    while (i<j) {
      swap(arr,i,j)
      i++
      j--
    }
    return arr
  }
  console.log(reverseArr([12,4,67,2,34,10]))
  //10,34,2,67,4,12