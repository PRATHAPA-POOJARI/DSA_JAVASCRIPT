

// Print 1, 2, 3, 4, 5 using setTimeout() such that each number is printed after 1 second.



let pk = function(){

   for(let i =0;i<=6;i++){

    setTimeout(()=>{

        console.log(i)
    },1000*i)
}
 
}


pk()
// for(let i =0;i<=6;i++){

//     setTimeout(()=>{

//         console.log(i)
//     },1000*i)
// }
