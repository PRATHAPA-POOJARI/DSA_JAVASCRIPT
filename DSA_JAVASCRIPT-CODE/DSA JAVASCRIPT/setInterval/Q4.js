// Create a digital clock.


function Time(){


    const  now  = new Date();

    console.log(now.toLocaleTimeString())
}


Time()


setInterval(Time,1000)