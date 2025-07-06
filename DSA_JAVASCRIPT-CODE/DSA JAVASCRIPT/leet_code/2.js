
let twoSum = function(num,target){

    for(let i =0;i<num.length;i++) {
        for(let j =i+1;j<num.length;j++){
            if(num[i]+num[j]==target) {
                return [i,j]
            }
        }
    }
}

let num = [2,7,10];
let target = 9;
console.log(twoSum(num,target))