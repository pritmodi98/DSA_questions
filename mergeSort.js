function merge(arr,s,e) {
    let mid=Math.floor((s+e)/2)
    let len1=mid-s+1,len2=e-mid   //find the length of arr1 & arr2
    let arr1=[],arr2=[]   //to copy the first half of the elements and the second half of the elements respectively
    
    let k=s
    for (var i = 0; i < len1; i++) {
       arr1[i]=arr[k++]  
    }
    
    k=mid+1
    for (var i = 0; i < len2; i++) {
       arr2[i]=arr[k++]
    }
    
    let index1=0,index2=0
    k=s
    while(index1<len1 && index2<len2){   //to merge arr1 & arr2 and place the element at the right place
       if (arr1[index1]<arr2[index2]) {
          arr[k++]=arr1[index1++]      
       }else{
          arr[k++]=arr2[index2++]
       }
    }
    
    while(index1<len1){
      arr[k++]=arr1[index1++]
    }
    
    while(index2<len2){
      arr[k++]=arr2[index2++]
    }
 }
 
 function mergeSort(arr,s,e) {
    
    if(s>=e){
      return
    }
    let mid=Math.floor((s+e)/2)
    mergeSort(arr,s,mid)   //sort the array
    mergeSort(arr,mid+1,e)
    merge(arr,s,e)         //merge the broken arrays
    return arr
 }
 
 let arr=[2,6,1,8,3,3,5,9,4]
 console.log(mergeSort(arr,0,arr.length-1))
//  for (var i = 0; i < arr.length; i++) {
//        console.log(arr[i],'')
//     }
 
 
 
 
 