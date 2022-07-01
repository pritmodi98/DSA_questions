function minimumDeletions(nums) {
    let min=Infinity,max=-Infinity,minIndex,maxIndex
    let start=0,end=nums.length-1
    let mid=Math.ceil((start+end)/2)
    let count=0
    if(nums.length===1) return 1
    for(let i=0;i<nums.length;i++){
        if(nums[i]<min){
            min=nums
            minIndex=i
        }else if(nums[i]>max){
            max=nums
            maxIndex=i
        }
    }
    if(maxIndex<=mid && minIndex<=mid){
        while(start<=maxIndex && maxIndex>minIndex){
            nums.shift()
            count++
        }
        while(minIndex>maxIndex && start<=minIndex){
            nums.shift()
            count++
        }    
    }else if(maxIndex>=mid && minIndex>=mid){
        while(end<=minIndex && maxIndex>minIndex){
            nums.pop()
            count++
        }
        while(minIndex>maxIndex && end<=maxIndex){
            nums.pop()
            count++
        }         
    }else{
        while(minIndex<maxIndex && start<=minIndex){
            nums.shift()
            count++
        }
        while(minIndex<maxIndex && end<=maxIndex){
            nums.pop()
            count++
        }
        while(minIndex>maxIndex && start<=minIndex){
            nums.shift()
            count++
        }
        while(minIndex>maxIndex && end<=maxIndex){
            nums.pop()
            count++
        }
    }
    return count
};

console.log(minimumDeletions([2,10,7,5,4,1,8,6]))