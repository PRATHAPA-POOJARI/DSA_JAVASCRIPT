

// const product = [
//     {
//         name:'laptop',
//         name:'phone',
//         price:'tablet'
//     },
//      {
//         name:'rajesh',
//         name:'harish',
//         price:'252'
//     },
// ]
// const searchTerm ='e';

// const result = product.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
// )
// console.log(result)

// array.filter((element, index, array) => {
//   // return true to keep the element
// })


const numbers = [1, 2, 3, 4, 5, 6];
const  pk = numbers.filter(even)
const mk = numbers.filter(odd)
console.log(`the output of even numberis: ${pk}`)
console.log(`the output of odd number is: ${mk}`)

function even ( num){
    return num % 2 ===0
}

function odd (num){
    return num % 2 !==0
}