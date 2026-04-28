// Count vowels and consonants
let  str = " Hello world";
let vowels =0;
let consonants = 0;

str = str.toLowerCase();
for(let i=0;i<str.length;i++){
    let ch =str[i];
    if(ch==="a"|| ch ==="e"|| ch ==="i" ||ch ==="o"||ch==="u"){
        vowels++
    }
    else if (ch >= 'a' && ch <= 'z') {
    consonants++;
}}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

