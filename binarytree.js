// const Queue=require('../DSA_questions/queue')

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    appendElement(data){
        const node=new Node(data)
        if (!this.head) {
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    removeElement(){
        if (this.size==0) {
            throw Error('queue is empty')
        }

        let curr=this.head
        this.head=curr.next
        curr.next=null
        this.size--
        return curr.data
    }

}

class Queue{
    constructor(){
        this.list=new LinkedList()
    }

    enQueue(data){
        this.list.appendElement(data)
    }

    deQueue(){
        return this.list.removeElement()
    }

    get getSize(){
        return this.list.size
    }

    frontElement(){
        return this.list.head.data
    }

    isEmpty(){
        return this.list.size==0
    }
}

class StackUsingQueue{
    constructor(){
        this.q1=new Queue()
        this.q2=new Queue()
        this.size=0
    }

    push(data){
        if (this.q1.isEmpty()) {
            this.q2.enQueue(data)
        }else{
            this.q1.enQueue(data)
        }
        this.size++
    }

    pop(){

        this.size=Math.max(0,this.size-1)
        if (this.q1.isEmpty()) {
            while (this.q2.getSize!=1) {
                this.q1.enQueue(this.q2.deQueue())
            } 
            return this.q2.deQueue()
        }else{
            while (this.q1.getSize!=1) {
                this.q2.enQueue(this.q1.deQueue())
            } 
            return this.q1.deQueue()
        }
    }

    isEmpty(){
        return this.size===0
    }

    get getSize(){
        return this.size 
    }
}


class TreeNode{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
        this.size=0
    }

    insert(data){
        const node=new TreeNode(data)
        if (!this.root) {
            this.root=node
        }else{
            const queue=new Queue()

            queue.enQueue(this.root)
            while (!queue.isEmpty()) {
                let temp=queue.deQueue()

                if (temp.left) {
                    queue.enQueue(temp.left)
                }else{
                    temp.left=node
                    return
                }

                if (temp.right) {
                    queue.enQueue(temp.right)
                }else{
                    temp.right=node
                    return
                }
            }
        }
    } 

    inorderTraversal(root){
        if (!root) {
            return
        }
        this.inorderTraversal(root.left)
        console.log(root.data,"->")
        this.inorderTraversal(root.right)
    }

    preorderTraversal(root){
        if (!root) {
            return
        }
        console.log(root.data,'->')
        this.preorderTraversal(root.left)
        this.preorderTraversal(root.right)
        

    }

    postorderTraversal(root){
        if (!root) {
            return
        }
        this.postorderTraversal(root.left)
        this.postorderTraversal(root.right)
        console.log(root.data,'->')
    }

    levelOrderTraversal(root){
       let queue=new Queue()
       queue.enQueue(root)
       while (!queue.isEmpty()) {
            let temp=queue.deQueue()
            console.log(temp.data)
            if (temp.left) { 
               queue.enQueue(temp.left)
            }
            if (temp.right) {
               queue.enQueue(temp.right)
            }
       }
       
    } 

}

const bt=new BinaryTree()
bt.insert(2)
bt.insert(4)
bt.insert(1)
bt.insert(7)
bt.insert(null)
bt.insert(8)
bt.insert(3)

// bt.insert(6)

// console.log(bt.root)

// bt.inorderTraversal(bt.root)
bt.preorderTraversal(bt.root)
// bt.postorderTraversal(bt.root)
// bt.levelOrderTraversal(bt.root)  


/**class Node{
 * }
 * 
 * 
 * root=insertion(data)
//function insertion(data){
   if(root==null){
      return newNode
   } 
   root.right=insertion()
   root.left=insertion()

} */


