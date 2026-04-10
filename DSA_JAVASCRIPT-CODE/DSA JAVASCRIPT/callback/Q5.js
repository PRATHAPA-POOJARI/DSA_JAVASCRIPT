// Write a function that takes two numbers and callback for addition;


function  sp(n1,n2, callback){

   let result = callback(n1,n2);
  console.log(result)
}


function janu(n1,n2){
 return n1+n2
};

sp(3,5,janu)