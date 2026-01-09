// remove duplicate from an array

//solution 1 
// const pk = [3,3,4,55,55,666]
// const Original =  [...new Set(pk)];
// console.log(Original)

                              
// let sp = [3,4,54,43,44,4,4,4];

// let jp  = [... new Set(sp)];

// console.log(jp)

// let arr = [33,44,44,44,33,45];
// let duplicate =[... new Set(arr)];

// console.log(duplicate)

// solution 2   using for loop

// let pk = [3,4,55,3,333,333,35,5];
// let unique = [];
// for(i=0;i<pk.length;i++){
// if(!unique.includes(pk[i])) {
// unique.push(pk[i])
// }}
// console.log(unique)












// let sp = [23,34,55,55,55];

// let  remove = [];

// for(let  i =0;i<sp.length;i++){

//     if(!remove.includes(sp[i]))
//         remove.push(sp[i])
// }

// console.log(remove)




let arr  = [2,3,4,4,5,5,5,4,34,444];;

let original = [];

for(let i = 0;i<arr.length;i++){


    if(!original.includes(arr[i])){
        original.push(arr[i])
    }
}

console.log(original)