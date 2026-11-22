var numIdenticalPairs = function(nums) {
    let best;
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                best=[i,j];
                count++;
            }
        }
    }
    return count;
};

console.log(numIdenticalPairs([1,3,5,1,2,1]));