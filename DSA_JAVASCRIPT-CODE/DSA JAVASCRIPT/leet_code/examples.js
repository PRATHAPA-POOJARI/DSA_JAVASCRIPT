
let twoSum = function(num,target){
    for(let i =0;i<num.length;i++){
        for(let j =i+1;j<num.length;j++){
            if(num[i]+ num[j]==target){
                return [i,j]
            }
        }
    }
    
}

let num = [2, 6, 8];
let target = 10;
console.log(twoSum(num, target));
