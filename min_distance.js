//find the minimum distance between any two occurences of the minimum integer in the array.
function minOccurDifFinder(arr){
    let min=1001
    const indexArr=[]
    for(let i=0;i<arr.length;i++){
      if (arr[i]<min) {
        min=arr[i]
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]===min) {
        indexArr.push(i)
      }
    }
    if (indexArr.length===1) {
      return -1
    }
    let dif=1000
    for (var i=indexArr.length-1;i>=0;i--) {
      if (indexArr[i]-indexArr[i-1]<dif) {
        dif=indexArr[i]-indexArr[i-1]
      }
    }
    return dif
  }
  console.log(minOccurDifFinder([5,1,2,3,4,2]))