class Node{
    constructor(val){
      this.val=val
      this.next=null
    }
}

class Stack{
    constructor(){
       this.first=null
       this.last=null
       this.size=0
    }
    unShift(val){             //add element at append
       let node=new Node(val) 
       node.next=this.first
       this.first=node
       if (!this.size) {
          this.last=node
       }
       this.size++
       return this.first
    }

    shift(){
       if (!this.size) {   //delete element at append
          //throw Error('stack is empty')
          return 'stack is empty'
       } 
       let current=this.first
       this.first=this.first.next
       current.next=null
       this.size--
       if (!this.size) {
           this.last=null
       }
       return current
    }

    getTop(){
       return this.first
    }

    getSize(){
       return this.size
    }
}

const st=new Stack()
st.unShift(1)
st.unShift(2)
st.unShift(3)
st.unShift(4)
st.shift()
st.shift()
st.shift()
st.shift()
console.log(st.shift())

// console.log(st.getSize())
// console.log(st.getTop())
// console.log(st)