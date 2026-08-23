// Automatically stop after a specified number of executions.

let count   = 0


let  timer = setInterval(()=>{

    count ++;

    console.log(count)


    if(count ===5){
        clearInterval(timer)
    }
},1000)