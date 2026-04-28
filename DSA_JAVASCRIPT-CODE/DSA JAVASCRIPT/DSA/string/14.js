// Remove spaces from string


let srt =" hhai  manu";

let result = "";

for(let i =0;i<srt.length;i++){

    if(srt[i] !== " "){
        result = result+srt[i]
    }

}


console.log(result)