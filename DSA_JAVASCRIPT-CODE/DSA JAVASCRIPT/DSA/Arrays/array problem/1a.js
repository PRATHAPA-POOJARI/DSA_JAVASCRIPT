let sp = [2,4,1,23];
let sm = sp[0]
for(let i =0 ;i<=sp.length;i++){
    if(sp[i]>sm) {
     sm = sp[i]
    }
}

console.log(` the smallest element in the array is ${sm}`)
