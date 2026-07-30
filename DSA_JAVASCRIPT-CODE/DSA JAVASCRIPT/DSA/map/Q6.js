// Loop through a Map

let pk = new Map();

pk.set("name","orat");
pk.set("native","banglore");

for(let [key, value] of pk){
    console.log(key,value)
}