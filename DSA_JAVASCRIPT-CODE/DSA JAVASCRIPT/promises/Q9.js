// Create a Promise chain where the second .then() throws an error — catch it with .catch()


 let pk =new Promise((resolve,reject)=>{

    resolve(10);
 }
 )

 pk.then((nanu)=>{
    console.log(nanu)
 })
 .then((nanu)=>{
    throw new Error(" an error occured in the secnd then block")
 })
 .catch((err)=>{
    console.log(err.message)
 })
 console.log(pk)