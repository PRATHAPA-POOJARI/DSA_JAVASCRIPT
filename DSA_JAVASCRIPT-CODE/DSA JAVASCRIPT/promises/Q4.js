// Create a Promise that resolves after 3 seconds with the message "Done!"

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Done!")
    }, 3000)
})

console.log(promise);

promise
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})