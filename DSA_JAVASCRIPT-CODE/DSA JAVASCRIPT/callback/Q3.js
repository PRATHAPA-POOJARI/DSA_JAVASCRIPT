// Write a function that takes a number and callback to double it

function pk(num, callback) {
  let result = callback(num);
  console.log(result);
}

function janu(n) {
  return n * 2;
}

pk(2, janu);




















let  pk = function (num,callback){

  let result = callback(num); 

console.log(result)
}



let sp = function(n){


   return n * 2 
}

pk(2, sp)