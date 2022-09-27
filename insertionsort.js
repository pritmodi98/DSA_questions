function insertionSort() {
    for (let i = 0; i < array.length; i++) {
         let temp=arr[i]
         let j=i-1

         while (j>=0 && arr[j]>temp) {
             arr[j+1]=arr[j]
             j--
         }
         arr[j+1]=temp
    }
}

console.log(insertionSort([]))