// Convert an Object to a Map

let pk =  {
    name:"  johan",
    age :23,

};

const map = new  Map (Object.entries(pk));

console.log(map);
console.log(pk)