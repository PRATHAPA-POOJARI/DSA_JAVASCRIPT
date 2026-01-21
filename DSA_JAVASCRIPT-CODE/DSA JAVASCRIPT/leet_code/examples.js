
let twoSum = function(nums,target){
    for(let i = 0;i<=nums.length;i++){
        for(j = i+1;i<=nums.length;i++){
            if(nums[i]+nums[j]==target){
                 return [i,j]
            }
        }
    }
}
let  nums =[2,7,7,876,6];
let  target = [14];

console.log(twoSum(nums,target))