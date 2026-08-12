
// Write a Promise and use .finally() to print "Completed" regardless of result


let mk = new Promise((resolve,reject)=>{

    let result = false;
 if(result){
    resolve(" hai")
 }else {
    reject(" not output")
 }
});

mk.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("completed baby")
})