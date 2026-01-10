// Count Vowels in a String

// useing for loop 


function Ovels (str){

    const  vowels = " aeiouAEIOU"; // ALL  VOWELS ;
   
    let count  =0;

    for(let i  = 0;i<str.length;i++){

        if(vowels.includes(str[i])) {
            count ++
        }

    }

    return count;
}

console.log(Ovels("hai"))