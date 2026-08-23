// Write an async function that waits 2 seconds and then returns "Hello" 



async  function  Pk() {
  

     return new Promise((resolve,reject)=>{

     setTimeout(()=>{

        resolve("hello")
    },2000)
    
     })

 
}

Pk().then((result)=>{

    console.log(result)
})

