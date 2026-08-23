//Handle multiple errors in a chain using a single .catch() at the end




function  loginUser(){
    return new Promise((resolve,reject)=>{
        resolve("user  logged in")
    })
}

loginUser().
then((msg)=>{
    console.log(msg);
     throw new Error("Failled to load  user profie")
})
.then((dashboard)=>{
    console.log(dashboard);
})

.then((profile)=>{
    console.log(profile)
})

.catch((err)=>{
    console.log(err.message)
})