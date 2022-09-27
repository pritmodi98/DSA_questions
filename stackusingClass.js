class Stack{
    constructor(size){
        this.size=size
        this.arr=[]
        this.top=-1
    }

    push(element){
       if (this.size-this.top>1) {
        //   this.top++
          this.arr[++this.top]=element
       }else{
          console.log('stack overflow')
       }
    }

    pop(){
       if (this.top>=0) {
          this.top--
       }else{
          console.log('stack underflow')
       }
    }

    peek(){
       if (this.top>=0) {
          return this.arr[this.top] 
       }else{
          console.log('stack is empty')
          return -1
       } 
    }

    isEmpty(){
       return this.top==-1
    }
}

const st=new Stack(5)
st.push(12)
st.push(15)
st.push(18)
st.push(21)
st.pop()
st.pop()
st.pop()
st.pop()


// st.push(27)

console.log(st.peek())
console.log(st.isEmpty())
console.log(st)
