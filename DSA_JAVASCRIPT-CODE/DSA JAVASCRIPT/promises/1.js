
// const myPromise  = new Promise((resolve,reject)=>{
// let result = true;


// if(result){
//     resolve('hai babby')
// }
// else {
//     reject("aaam")
// }
// })

// myPromise.then((message)=>{
// console.log("resolve",message)
// })

// .catch((error)=>{
// console.log("reject",error)
// })


// const  myPromise = new Promise((resolve,reject)=>{
//     const  result = false;

//     if(result) {
//         resolve('hai baby')
//     }
//     else {
//         reject('i am not in ur baby')
//     }
// })
// myPromise.then((message)=>{
//     console.log('resolve',message)
// })
//   .catch((err) => {
//       console.log('reject', err);
//   });





































let pk = new Promise((resolve,reject)=>{

  let pk = false;

  if(pk){

    resolve("this is prathapa");

  } else 
{
    reject(" not prathu")
}


})


console.log(pk)

async  function handleAsync() {

    try {
        const result =  await pk;
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}


handleAsync()


























