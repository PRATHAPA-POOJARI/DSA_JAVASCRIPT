// Print current time every second. 

// const  pk =   new Date
// console.log(pk)

setInterval(()=>{
    const  pk =   new Date
    const  date = pk.toLocaleDateString("en-IN")
    const time  = pk.toLocaleTimeString("en-IN")
  console.log(`${date} ${time}`)

},1000)