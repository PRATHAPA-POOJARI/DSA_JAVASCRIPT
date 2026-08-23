// Use Promise.any() where the first two Promises reject but the third resolves

let p1 = Promise.reject("1")
let p2 = Promise.reject("w")
let p3 = Promise.resolve("hahah")
let p4 = Promise.resolve("hahah")
let p5 = Promise.resolve("hahah")

Promise.any([p1,p2,p3,p4,p5])
.then((result)=>{

console.log(result)
})


