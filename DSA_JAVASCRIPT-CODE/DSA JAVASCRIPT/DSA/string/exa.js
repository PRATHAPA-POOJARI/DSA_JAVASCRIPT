

let pk =" hello Hai"

let count =0

for(let i =0;i<pk.length;i++){
    let ch = pk[i].toLocaleLowerCase()

    if(ch>='a' && ch<='z' && !'aeiou'.includes(ch))

        count ++
}

console.log(count)