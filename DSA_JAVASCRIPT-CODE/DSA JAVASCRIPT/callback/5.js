
// //callback function 
// function sayHello(){
//     console.log("hello world")
// }

// //function that is take another function as an argument
// function greetUser(callback){
//     console.log("starting greeting")

//     callback() // call the  function passed 
// }

// greetUser(sayHello)


















function deepak(callback){

    console.log("hai this is working fiene")


    return callback();
}
function prathap(){

console.log('janu')

}

deepak(prathap)