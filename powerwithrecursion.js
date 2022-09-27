let myPow = function(x, n) {
    if(n===0) return 1
    
    if(n===1) return x;
    if(n<0) {    // for negative power
        x= 1/x
        n = -n
    }
    if(n%2 !== 0){
        return myPow(x, (n-1)/2) ** 2 * x
    }else{
        return myPow(x, n/2) ** 2
    }
 
};
console.log(myPow(2,-3))