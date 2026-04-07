// Fetch a number from a resolved Promise and return its square in the next .then()


let pk = new Promise((resolve,reject)=>{
    resolve(5)
})

pk.then((num)=>{
  return num * num;
})
.then((result)=>{
    console.log(result)
})

.catch((err)=>{
console.log(err)
})