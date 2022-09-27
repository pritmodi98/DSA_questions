function partition(arr,s,e) {
    let pivot=arr[s]   //to place the start index element as the pivot
    let count=0
    for (let i = s+1; i <=e; i++) {    //to determine the count of the elements less than pivot
       if (arr[i]<=pivot) {
           count++
       }
    }
    
    let pivotIndex=s+count;   //here we determine perfect index for the pivot element
    [arr[pivotIndex],arr[s]]=[arr[s],arr[pivotIndex]]  //for swaping & to place the pivot at pivotIndex

    
    let j=s,k=e
    while(j<pivotIndex && k>pivotIndex){  
       while(arr[j]<=pivot){              
          j++
       }
       
       while(arr[k]>pivot){
          k--
       }
       
       //swap the element if elements are greater than pivot at left side and elements are less than
      //pivot at right side
       if (j<pivotIndex && k>pivotIndex) {
          [arr[j],arr[k]]=[arr[k],arr[j]]
          j++
          k--
       }
    }
    
    return pivotIndex
    
 }
 
 function quickSort(arr,s=0,e=arr.length-1) {
    if (s>=e) {
      return;
    }
   
   // if(s<e) {
      let p=partition(arr,s,e)   //to place pivot element at the pivotindex
      quickSort(arr,s,p-1)       //these are subproblems
      quickSort(arr,p+1,e)
   // }
   
   return arr
 }
 
 
 const result=quickSort([7,2,5,2,9,1,8])
 console.log(result)