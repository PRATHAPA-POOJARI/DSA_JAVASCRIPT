function greet(name){
    return "hello " + name;
}
function processorUserInput(callback){
    let name='prathu';

    return callback(name)
}
console.log(processorUserInput(greet))