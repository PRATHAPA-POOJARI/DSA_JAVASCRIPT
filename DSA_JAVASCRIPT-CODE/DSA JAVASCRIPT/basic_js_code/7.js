// Sum of digits of a number

let num =34533;

let  sumDigit = function(num){

    let sum  =0;
     while(num>0){
        let digit = num %10;

        sum = sum +digit;
        num  =Math.floor(num/10)
     }
     return sum
};

console.log(sumDigit(2343343))
