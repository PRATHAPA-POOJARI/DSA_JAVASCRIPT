//  Use Promise.race() with two Promises — one resolves in 1s, another in 3s 


// let p4 = Promise.reject("nanu")
// let p1 = Promise.resolve("hai");
// let p2 = Promise.reject("hahha");



let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hai")
    }, 1000)
})


let p2 = new Promise((resolve) => {
    setTimeout(() => {

        resolve("hahahahha")
    }, 2000)
})
Promise.race([p1, p2])
    .then((result) => {

        console.log(result)
    })


    
