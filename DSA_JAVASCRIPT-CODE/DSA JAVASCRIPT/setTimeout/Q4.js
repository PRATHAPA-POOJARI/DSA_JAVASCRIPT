
// Cancel a timeout using clearTimeout().




let sp =setTimeout(()=>{


console.log("hai")
},4000)


clearTimeout(sp)

// clearTimeout() needs the ID returned by setTimeout(). 
// setTimeout() → gives timer ID → clearTimeout() uses that ID.