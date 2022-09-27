function secondLarge(arr) {
    if(arr.length==1) return 'no second largest element exist'   //base case

    let first,second
    
    if(arr[0]>arr[1]){
        first=arr[0]
        second=arr[1]
    }else if(arr[0]==arr[1]){
        first=arr[0]
    }else{
        second=arr[0]
        first=arr[1]
    }
    
    
    for(let i=2;i<arr.length;i++){
        
        if(first<arr[i]){
            second=first
            first=arr[i]
        }else if(second==undefined && first!=arr[i]){
            second=arr[i]
        }else if((second < arr[i]) && first!=arr[i]){
            second=arr[i]
        }
        
    }
    
    if(second==undefined) return 'no second largest exist'
    return second
}

console.log(secondLarge([-1,-1,-1,-1,-1,-1,-1]))