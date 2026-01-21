// check whether prime no or not 

let pk =11;
 let isPrime  = true;

 for(let i =2;i<pk;i++){
    if(pk % i ==0){
         isPrime =false;
          break;
    }
 };

 if(isPrime){
     console.log(('it is  a prime number '));
 }
 else {
    console.log(" it is  not prime")
 }