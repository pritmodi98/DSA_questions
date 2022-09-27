function bubbleSort(arr){
    for (var i = 0; i < arr.length-1; i++) {
        let flag=true
        for (var j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
              let temp=arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=temp
              flag=false
            }
        }
        
        if (flag) break
    }
    return arr
}
  console.log(bubbleSort([6,12,16,8,9,10]))