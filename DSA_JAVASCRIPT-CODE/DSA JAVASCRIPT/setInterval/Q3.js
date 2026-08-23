// Create a countdown timer. 

let  count =  10;

  let mk =  setInterval(()=>{
  count--
  console.log(count)
          if(count==0){
           clearInterval(mk)

           console.log("!time up")
          }
    },1000)
    


