// next queson is  Create a Promise that resolves with 5, then double it in .then(), then add 10 in the next .then() and print the final result

let pk = new Promise((resolve,reject)=> {

resolve(5) 
});

pk
.then((num)=>{
  return num * 2; 
})
.then((result)=>{

    return result+10
})

.then((next)=>{
    console.log(next)
})
.catch((err)=>{
    console.log(err)
})


console.log(pk)

