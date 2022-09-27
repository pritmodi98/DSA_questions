function selectionSort(arr){
    for (var i = 0; i < arr.length; i++) {
      let min=arr[i]
      for (var j = i; j < arr.length-1; j++) {
        if (min>arr[j+1]) {
          min=arr[j+1]
          index=j+1
        }
      }
      if (min!==arr[i]) {
        console.log(arr,'swap between:',min,arr[i])
        let temp=arr[i]
        arr[i]=arr[index]
        arr[index]=temp
        
      }
    }
    return arr	
  }
  console.log(selectionSort([1,4,5,2,3,-1]))