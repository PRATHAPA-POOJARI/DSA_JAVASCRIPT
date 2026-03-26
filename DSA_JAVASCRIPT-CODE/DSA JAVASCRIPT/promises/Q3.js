//  Create a Promise that rejects with "Something went wrong" and handle it with .catch()


const promise1 = new Promise((resolve,reject)=>{
    reject("something went wrong")
});

promise1.catch((err1)=>{
console.log(err1)
})