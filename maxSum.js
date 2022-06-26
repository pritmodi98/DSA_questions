//find the maximum sum of any two elements in an array.
let arr=[12,4,67,2,34,81]
let maxIndex
let maxArr=[]

function maxEle() {
  let max=arr[0]
  for (var i = 1; i < arr.length; i++) {
     if (arr[i]>max) {
       max=arr[i]
       maxIndex=i
     }
  }
  maxArr.push(max)
}

function maxSum() {
    maxEle()

    if (maxIndex==arr.length-1) {
      arr.pop()
      console.log(arr)
      maxEle()
      return maxArr
    }
    
    for (var i = maxIndex; i <arr.length-1; i++) {
    arr[i]=arr[i+1]
    }
    arr.pop()
    maxEle()
    return maxArr
}
console.log(maxSum())
