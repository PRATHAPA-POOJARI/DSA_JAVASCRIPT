// Create a chain of 3 .then() calls — each one adds 1 to the previous value

let pk = new Promise((resolve,reject)=>{
    resolve(1);
})

pk.then((num)=>{
       console.log(num)
    return  num+1
 
}).then((num)=>{
     console.log(num)    
    return  num+1
   
}).then((num)=>{
    console.log(num)
    return  num+1
     
})
.catch((err)=>{
    console.log(err)
})

console.log(pk)