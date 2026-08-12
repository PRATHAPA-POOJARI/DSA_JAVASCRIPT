// Reverse a number

// let   Reverse = function(num){
//      let rev = 0;
//      while(num>0){
//         let digit = num % 10;                 
//         rev = rev*10+digit;
//         num  = Math.floor(num/10) 
//      }

//      return rev;

// }


// console.log(Reverse(234343))






  rev = rev*10+digit;

It does two things:

rev * 10 → moves the existing digits one position to the left.
+ digit → adds the new digit at the end.


Step-by-step

Initially:

rev = 0;
1st digit = 3
rev = rev * 10 + digit;
rev = 0 * 10 + 3;
rev = 3;

So:

rev = 3
2nd digit = 2
rev = 3 * 10 + 2;
rev = 30 + 2;
rev = 32;

So:

rev = 32
3rd digit = 1
rev = 32 * 10 + 1;
rev = 320 + 1;
rev = 321;

So finally:

rev = 321


































































let reverse = function(num){
   let reverse =0;
 while(num>0){
   let digit = num % 10;  //// Extract the last digit from the number.
   reverse = reverse*10+digit;   ////Append it to the reversed number.
    num = Math.floor(num/10)  // // Remove the last digit from the original number. 
 }
return reverse

}

 console.log(reverse(-1234))