function freqCount(arr1,arr2){
    const obj1={},obj2={}
    for (var i = 0; i < arr1.length; i++) {
      obj1[arr1[i]]= (obj1[arr1[i]]|| 0) + 1
    }
    for (var i = 0; i < arr2.length; i++) {
      obj2[arr2[i]]= (obj2[arr2[i]]|| 0) + 1
    }
    for (const key in obj1) {
      if (obj1[key]!==obj2[key*key]) {
        return false
      }
    }
    return true
  }
  console.log(freqCount([2,3,4,4],[4,16,9,16]))