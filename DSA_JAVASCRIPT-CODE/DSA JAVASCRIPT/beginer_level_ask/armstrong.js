
let n = 153;
 let temp = n;
let r;
let sum = 0;
while (n > 0) {
    r = n % 10;
    n = Math.floor(n / 10);  // Corrected line: use Math.floor to ensure integer division
    sum = sum + r * r * r;
}
if (temp == sum) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}


