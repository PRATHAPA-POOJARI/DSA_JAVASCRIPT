
// // useing  split(),reverse(),join()
// const pk = 'hello';
// let mk = pk.split("").reverse().join("");
// console.log(mk)


// //Using a for Loop (Without Built-in Methods)
const reverseString = (str) => {
    let reversed = ""; // Store reversed string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed+str[i] // Append each character
    }
    return reversed; // Return final reversed string
};

console.log(reverseString("hello")); // Output: "olleh"


// // useing an array 

// const reverseString = (str) => {
//     let reversed = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed.push(str[i]); // Push each character to the array
//     }
//     return reversed.join(""); // Convert array back to a string
// };

// console.log(reverseString("hello")); // Output: "olleh"


// let  reverseString  =(str) =>{
//     let reverse = [];
//     for(let i = str.length-1;i>=0;i--){
//          reverse +=(str[i])
//     }
//     return reverse.join("")
// }

// let pk = reverseString("djsdjkasdasm")

// console.log(pk)