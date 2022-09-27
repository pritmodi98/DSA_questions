var singleNumber = function(nums) {
    // const obj={}
    // if(nums.length==1) return nums[0]
    // for(let el of nums){
    //     obj[el]=(obj[el] || 0)+ 1
    // }
    // console.log(obj)
    // for(let key in obj){
    //     if(obj[key]==1) return key
    // }                        //both solution workss
   
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        result = result^nums[i];
        console.log(result)
    }
    return result;
};

console.log(singleNumber([4,1,2,1,2]))

