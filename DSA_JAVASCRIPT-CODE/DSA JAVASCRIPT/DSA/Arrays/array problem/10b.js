
// let sp = [2,3,55,17,3]

// for(let i =0;i<sp.length;i++){


//     if(sp[i]%2 !==0){
//         console.log(sp[i])
//     }
// }











let sp  = [5,6,3,11,23];

let odd  = [];

for(let i  = 0;i< sp.length;i++) {

    if(sp[i]% 2 !==0){

        odd.push(sp[i])
    }
}

console.log(odd)