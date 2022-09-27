function isCurrentWindowValid(count,k) {   
  let curr_u_c=0
  for (var i = 0; i < count.length; i++) {
    if(count[i]>0) curr_u_c++
  }
  return k>=curr_u_c 
}

function findKthLargestSubstring(str,k) {
    //k is the distinct character in substring
   let u_c_count=0
   let count=[]  //array contains the freq of character
   //a-z(26)  //indexing of the array
   for (var i = 0; i < 26; i++) {			
     count.push(0)
   }
   //count the number of unique characters
   for (var i = 0; i < str.length; i++) {
       if (count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0) {
         u_c_count++
       }
       count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
   }
   
   if (k>u_c_count) {
     console.log('substring can not be formed')
   }
   
   //reset the count array
   for (var i = 0; i < count.length; i++) {
       count[i]=0
   }
   
   let start=0
   let end=0
   let max_window_size=1
   let max_window_start=0
   count[str[0].charCodeAt(0)-'a'.charCodeAt(0)]++
   
   for (var i = 1; i < str.length; i++) {
       count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++ //tracking the character present inside the window
       end++  //increasing the window size
       
       while(!isCurrentWindowValid(count,k)){
           
           count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]--
           start++
       }
       
       if (end-start+1>max_window_size) {
         max_window_size=end-start+1
         max_window_start=start
       }
   }
   console.log(max_window_start,max_window_size)
   let resultString=''
   for (var i = max_window_start; i <max_window_start+max_window_size; i++) {
      resultString+=str[i]
   }
   console.log(resultString)
 } 
 
 findKthLargestSubstring('aabacbebebe',3)
//console.log('B'.charCodeAt(0))