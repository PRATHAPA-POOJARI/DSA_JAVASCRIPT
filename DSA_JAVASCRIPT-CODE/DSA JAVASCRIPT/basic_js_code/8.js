// Count digits in a number

let countDigit = function(num){

  let count  =0;
  if(num ===0) return 1

  while(num>0){
    count ++;
    num = Math.floor(num/10)
  }
return count
}

console.log(countDigit(323423342))