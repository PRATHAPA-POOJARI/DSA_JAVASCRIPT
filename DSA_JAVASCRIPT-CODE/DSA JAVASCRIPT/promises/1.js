
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


const  myPromise = new Promise((resolve,reject)=>{
    const  result = false;

    if(result) {
        resolve('hai baby')
    }
    else {
        reject('i am not in ur baby')
    }
})
myPromise.then((message)=>{
    console.log('resolve',message)
})
  .catch((err) => {
      console.log('reject', err);
  });