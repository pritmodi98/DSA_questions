function sortedInsert(stack,element){
    function isEmpty(stack) {
        return stack.length==0
    }
    if(isEmpty(stack) || (!isEmpty(stack) && stack[stack.length-1]<element)){
        stack.push(element)
        return;
    }
    
    let temp=stack.pop()
    sortedInsert(stack,element)
    stack.push(temp)
}
function sortStack(stack){
    if(stack.length==0) return;
    let temp=stack.pop()
    sortStack(stack)
    sortedInsert(stack,temp)
    return stack
}

console.log(sortStack([-1,5,-5,6,2,6,1]))

