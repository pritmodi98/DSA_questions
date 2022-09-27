//Given a brackets expression, find a minimum number of bracket reversals required to make an expression balanced using Stack.
//Return -1 if it is impossible to make ‘STR’ valid.  or question should be like this find minimum cost to make string valid.

function minCost(str) {
    let stack=[]

    function isEmpty() {
        return stack.length==0
    }
    function top() {
        return stack[stack.length-1]
    }

    if (str.length%2!=0) {
        return -1
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i]=='{') {
            stack.push(str[i])
        }else{
            if ( !isEmpty() && top()=='{') {
                stack.pop()
            }else{
                stack.push(str[i])
            }
        }

    }

    let a=0,b=0  //closing and opening brac respectively
        while (!isEmpty()) {   
            if (top()=='{') {
                b++
            }else{
                a++
            }
            stack.pop()
        }
       
        let ans=Math.floor((a+1)/2)+Math.floor((b+1)/2)
        return ans
}

const string='}'
console.log(minCost(string))

//{{{}}}:0
//}}}{{{:4
// {{{}:1
//{{}{}}:0
//{}}{}}:1
//{{{{:2
//{{{}}:-1
