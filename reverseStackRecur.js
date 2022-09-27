//reverse a stack using 

function pushAtBottom(stack,x) {    //x denotes element to be inserted
    function isEmpty(stack) {
        return stack.length==0
    }
    if (isEmpty(stack)) {
        stack.push(x)
        return;
    }

    let temp=stack.pop()
    pushAtBottom(stack,x)
    stack.push(temp)

}

function reverseStack(stack) {
    function isEmpty(stack) {
        return stack.length==0
    }
    if (isEmpty(stack)) {
        return;
    }
    let temp=stack.pop()
    reverseStack(stack)
    pushAtBottom(stack,temp)
    return stack
}

console.log(reverseStack([1,2,3,4,5,6,7]))