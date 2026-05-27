// Execute multiple timeouts with different delays.

setTimeout(()=>{
    console.log("this is  the first timeout  after 1 second");
}, 1000)

setTimeout(()=>{
    console.log("this is the second timeout after 2 seconds");
}, 2000)

setTimeout(()=>{
    console.log("this is the third timeout after 3 seconds");
}   , 3000) ;