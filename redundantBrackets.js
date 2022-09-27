//return true if the given expression contains a pair of brackets,else return false.the given string only contains ( , ), +,-,*,/ and 
//lowercse english letters 
function findRedundantBrack(str) {
    let stack=[]

    function top() {   //to find the top element of the stack
        return stack[stack.length-1]
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i]=='(' || str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/') {
            stack.push(str[i])
        }else{
            if (str[i]==')') {
                let isRedundant=true
                while (top()!=='(') {
                    if (top()=='+' || top()=='-' || top()=='*' || top()=='/') {
                        isRedundant=false
                    }
                    stack.pop()
                }

                if(isRedundant){
                    return isRedundant
                }
                stack.pop()
            }
        }
    }
    return false
}

let string='(a*b+(c/d))'
console.log(findRedundantBrack(string))
//(a+b) : false
//(a+c*b)+(c)) : true
//(a*b+(c/d)):false
//((a/b)):true