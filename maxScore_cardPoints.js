let beginingSum = 0,lastIndex = cardPoints.length-1,endSum = 0,currentSum = 0;
    
    for(let i=0 ; i < k; i++){
        beginingSum += cardPoints[i];
    }
    
    let maximumSum = beginingSum;
    
    while(k > 0){
        endSum += cardPoints[lastIndex];
        
        currentSum = beginingSum - cardPoints[k-1] + endSum;
        
        maximumSum = Math.max(currentSum,maximumSum);
        
        beginingSum = beginingSum - cardPoints[k-1];
        
        lastIndex--;
        k--;
    }
    
    return maximumSum;

    // var maxScore = function(cardPoints, k) {
   
    //     let sum=0
    //     let i=0
    //     let j=cardPoints.length-1
    //     let count=0
        
        
    //     function checkSum(i,j){
            
    //          while(cardPoints.length===k && count<k){
    //            sum+=cardPoints[i]
    //            count++
    //            i++
    //          }
    //          while(count<k){
    //             if(cardPoints[i]===cardPoints[j]){
    //                 sum=sum+cardPoints[i]
    //                 count++
    //                 if (cardPoints[i+1]>cardPoints[j-1]) {
    //                   i++
    //                 }
    //                 else if (cardPoints[i+1]<cardPoints[j-1]) {
    //                   j--
    //                 }
    //                 else{
    //                   i++
    //                   j--
    //                   checkSum(i,j)
    //                 }
                    
    //                 // if (count===k) break
    //             }
        
        
    //            if(cardPoints[i]>cardPoints[j] && count<k){
    //                 sum+=cardPoints[i]
    //                 count++
    //                 i++
    //            }
    //            else if (count<k) {
    //                 sum+=cardPoints[j]
    //                 count++
    //                 j--
    //            }  
    //          } 
    //         // console.log(count)
    //          return sum
    //     }
    //     const result=checkSum(i,j)
    //     return result
    // };
    
    // console.log(maxScore([1,6,5,4,6,1],3))
    
    