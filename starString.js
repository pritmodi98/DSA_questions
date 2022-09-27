let n=4,row=1

while(row<=n){
   
    let space=n-row,str=''
    while(space){
       str+=' '
       space--
    }
    
    let i=1
    while(i<=row){
       str+=i
       i++
    }
    
    
    i=row-1 
    while(i){
       str+=i
       i--
    }
    console.log(str)
    row++
}
  
//========================================
// let n=5,row=1

// while(row<=n){
//    let str=''
//    let space=n-row
//    while(space!=0){
//      str+=' '
//      space--
//    }
//     let col=1
//     while(col<=row){
//       str+='*'
//       col++
//     }
//     console.log(str)
//     row++
// }