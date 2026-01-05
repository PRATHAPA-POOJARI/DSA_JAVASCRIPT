function pk(){
return 'hello '

}
// higher order function

function  greetUser(callback){
    return callback();
}


console.log(greetUser(pk))

// output : hello








