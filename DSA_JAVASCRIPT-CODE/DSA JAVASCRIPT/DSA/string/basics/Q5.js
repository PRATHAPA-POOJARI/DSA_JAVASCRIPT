 
 	 	         
		
// Count vowels and consonants


let   pk = "hai";

let vowels = "aeiouAEIOU";
let count = 0;
for(let i=0;i<pk.length;i++){
    if(vowels.includes(pk[i])){
        count++
    }
}

console.log(count)