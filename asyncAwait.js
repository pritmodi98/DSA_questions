//async Js programming
//Callbacks,promises,async & await

// const datas=[
//     {name:'prit',profession:'software analyst'},
//     {name:'mayank',profession:'business analyst'}
// ]

// function getDatas() {
//     setTimeout(() => {
//         let output=''
//         datas.forEach((data,index) => {
//             output+=`<li>${data.name}</li>`
//         });
//         document.body.innerHTML=output
//     }, 1000);
// }

// function createData(newData) {

//     setTimeout(() => {
//         datas.push(newData)
//         console.log(datas)
        
//     }, 2000);
// }

// createData({name:'vivek',profession:'data analyst'})
// getDatas()

//======================================================================

// const datas=[
//     {name:'prit',profession:'software analyst'},
//     {name:'mayank',profession:'business analyst'}
// ]

// function getDatas() {
//     setTimeout(() => {
//         let output=''
//         datas.forEach((data,index) => {
//             output+=`<li>${data.name}</li>`
//         });
//         document.body.innerHTML=output
//     }, 1000);
// }

// function createData(newData,callback) {
//     setTimeout(() => {
//         datas.push(newData)
//         callback()
//     }, 2000);
// }

// createData({name:'vivek',profession:'data analyst'},getDatas)

//==============================================================

const datas=[
    {name:'prit',profession:'software analyst'},
    {name:'mayank',profession:'business analyst'}
]

function getDatas() {
    setTimeout(() => {
        let output=''
        datas.forEach((data,index) => {
            output+=`<li>${data.name}</li>`
        });
        document.body.innerHTML=output
    }, 1000);
}

function createData(newData) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newData)
            let error=false
            if (!error) {
                resolve()
            }else{
                reject('sab ka sath sabka vikas')
            }
        }, 2000);
    }) 
    
}

// createData({name:'vivek',profession:'data analyst'})
//    .then(getDatas)
//    .catch((err)=>console.log(err))


//async await
async function start() {
    await createData({name:'vivek',profession:'nautanki'})
    getDatas()
}

start()