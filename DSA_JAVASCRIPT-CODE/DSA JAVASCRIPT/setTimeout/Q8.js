// Create a bomb timer countdown using recursive setTimeout().

 let  timeLeft = 10;

  function  bombTimer (){
if(timeLeft >0) {
    console.log(`bomb  will explode in ${timeLeft}`)

    timeLeft --;

 setTimeout(bombTimer,1000)   

 
}else {
    console.log('BOOM! The bomb has exploded!')
}

  }

  bombTimer();
  