//program to delete middle element  of the stack

function deleteMid(stack,count,mid) {
    // let mid=Math.floor(size/2)
    if (mid==count) {
        stack.pop()
        return;
    }

    let temp=stack.pop()
    deleteMid(stack,count+1,mid)
    stack.push(temp)
    return stack
}

let count=0,mid
let arr=[1,2,3,4]
if (arr.length%2==0) {
    mid=(arr.length/2)-1
}else{
    mid=Math.floor(arr.length/2)
}
console.log(deleteMid(arr,count,mid))
// console.log(90 + "20" + "7")