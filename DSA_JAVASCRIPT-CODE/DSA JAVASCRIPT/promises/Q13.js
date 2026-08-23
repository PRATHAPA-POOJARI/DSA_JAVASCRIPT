// Use Promise.allSettled() where one Promise rejects — print all results 


let p1 = Promise.resolve(" hai");
let p2 = Promise.resolve(" haha haha ahha ");
let p3 = Promise.reject(" hahah you are failed")
Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log(typeof result)
    console.log(result)
})

.catch((err)=>{
    console.log(err)
})

