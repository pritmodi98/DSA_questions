/* you are given an m*n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank.return
 the wealth that the richest customer has.
 a customer's wealth is the amount of money they have in all their bank accounts.the richest customer is the customer that has the 
 maximum wealth. */

/**  
input :accounts=[[1,2,3],[3,2,1]]
o/p:6
explanation:
1st customer has wealth=1+2+3=6
2nd customer has wealth=3+2+1=6
both customers are considered the richest with a wealth of 6,so return 6. */

var maximumWealth = function(accounts) {
    let maxAmount=-Infinity
    function totalSum(banks){
        let totalAmount=0
        for(let balance of banks){
            totalAmount+=balance
        }
        return totalAmount
    }
    
    for(let customer of accounts){
        maxAmount=Math.max(totalSum(customer),maxAmount)
    }
    return maxAmount
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
