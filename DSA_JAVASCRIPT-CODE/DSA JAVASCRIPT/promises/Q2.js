// Create a Promise that resolves with "Hello World" and print it using .then()

const promise1 = new  Promise((resolve,reject)=>{
    resolve ("Hello  world");
    
});

promise1.then((pk)=>{
    console.log(pk)
})

