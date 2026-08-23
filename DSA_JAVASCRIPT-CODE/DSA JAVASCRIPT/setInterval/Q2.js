// Stop an interval using clearInterval().

let  count  =0

let mk =setInterval(()=>{
count ++
       console.log(count)

       if(count ===5){
        clearInterval(mk)
       }
},1000)

