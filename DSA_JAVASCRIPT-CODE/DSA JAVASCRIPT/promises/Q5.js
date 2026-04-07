

// Write a Promise and use .finally() to print "Completed" regardless of result

let pk = new Promise((resolve,reject)=>{
    let result = false;
    if(result){
        resolve("completed")
    }

    else {

         reject(" not completed")
    }
   
})
    console.log(pk)
    pk
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
console.log("completed")
});

