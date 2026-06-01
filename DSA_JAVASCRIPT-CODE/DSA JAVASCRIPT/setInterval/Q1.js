let  timeLeft = 10;

  const timer = setInterval(()=>{
    console.log(timeLeft);
    timeLeft--;


     if(timeLeft<0){
        console.log("Time's up!");
        clearInterval(timer);
     }
  },1000 )


