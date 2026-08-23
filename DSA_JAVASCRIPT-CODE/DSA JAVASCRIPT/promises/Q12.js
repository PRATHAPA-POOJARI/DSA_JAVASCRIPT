// Use Promise.all() to resolve 3 Promises and print all results together



let p1  = Promise.resolve("hai");
let p2 = Promise.resolve("haee")
let p3  = Promise.resolve("huu")


Promise.all([p1,p2,p3])
.then((result)=>{
    console.log(result)
});