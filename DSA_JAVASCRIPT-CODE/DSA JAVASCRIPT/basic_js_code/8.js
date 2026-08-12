// Count digits in a number

let countDigit = function(num){

  let count  =0;
  // if(num ===0) return 1

  while(num>0){
    count ++;
    num = Math.floor(num/10)
  }
return count
}

console.log(countDigit(323423342))






How it works

For 12345:

12345 / 10 → 1234   count = 1
1234  / 10 → 123    count = 2
123   / 10 → 12     count = 3
12    / 10 → 1      count = 4
1     / 10 → 0      count = 5

When num becomes 0, the loop stops.

Interview explanation

You can say:

"To count the digits, I repeatedly divide the number by 10 and increment a counter. Each division removes the last digit. When the number becomes zero, the counter gives the total number of digits."