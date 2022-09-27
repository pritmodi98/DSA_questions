// let obj={
//     name:'peter'
// }

//shallow copy

// let user=Object.assign({},obj)
// user.name="bruce"

// console.log('obj is:',obj)
// console.log('user is:',user)

// let user={...obj}
// user.name="bruce"

// console.log('obj is:',obj)
// console.log('user is:',user)

//above both ara shallow copy



// let obj={      //obj ki location different hai
//     name:'peter',
//     address:{         //address ki location different hai
//         city:'noida',
//         state:'UP'
//     },

// }
// let user={...obj}  //we can not copy nested object here
// user.name='manu'
// user.address.city='delhi'

// console.log('obj is:',obj)
// console.log('user is:',user) 

let obj={      //obj ki location different hai
    name:'peter',
    address:{         //address ki location different hai
        city:'noida',
        state:'UP'
    },

}
let user=JSON.parse(JSON.stringify(obj))  //we can copy here
user.name='manu'
user.address.city='delhi'

console.log('obj is:',obj)
console.log('user is:',user) 