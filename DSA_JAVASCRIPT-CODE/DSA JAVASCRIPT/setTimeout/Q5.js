// Write a function that delays the execution of another function by 3 seconds.



let pk = function(callback){

    setTimeout(()=>{
        console.log(" hai prathap")
        callback()
    },2000)
}



function child(){

    console.log(" ha ha  another function is executing later")
}
 


pk(child)

