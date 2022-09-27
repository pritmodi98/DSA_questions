//Apply ,call & bind in js

// let userDetails={
//     name:'Ajay sharma',
//     age:28,
//     designation:'software engineer',
//     printDetails:function () {
//         console.log(this.name)
//     }
// }

// userDetails.printDetails()

// let userDetails2={
//     name:'prit Modi',
//     age:24,
//     designation:'software engineer',
// }

// userDetails.printDetails.call(userDetails2)

// ===================================================================
// let userDetails={
//     name:'Ajay sharma',
//     age:28,
//     designation:'software engineer',
    
// }

// let printDetails=function () {
//     console.log(this.name)
// }

// printDetails.call(userDetails)

// let userDetails2={
//     name:'prit Modi',
//     age:24,
//     designation:'software engineer',
// }

// printDetails.call(userDetails2)

//========================================================================
let userDetails={
    name:'Ajay sharma',
    age:28,
    designation:'software engineer',
    
}

let printDetails=function (state,country) {
    console.log(this.name+' '+state+' '+country)
}

printDetails.call(userDetails,'Gujarat','India')

let userDetails2={
    name:'prit Modi',
    age:24,
    designation:'software engineer',
}

printDetails.call(userDetails2,'Punjab','India')   //we are not creating the copy of function here but invoke the function here.
printDetails.apply(userDetails2,['Punjab','India'])

//Bind
let newFun=printDetails.bind(userDetails,'delhi','india') 
//by using bind we create the copy of the printdetails function here not invoke prindetails function
newFun()  //here we are invoke the function printdetails.
console.log(newFun)










