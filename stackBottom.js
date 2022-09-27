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
    return stack
}

console.log(pushAtBottom([1,2,3,4,5,6,7],10))