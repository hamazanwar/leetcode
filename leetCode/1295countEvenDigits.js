var findNumbers = function(nums) {
    let count=0;
    let single;
    for(let i=0;i<nums.length;i++){
        let digits=0;
        single=nums[i];
        while(single>0){
            single=Math.floor(single/10);
            digits++;
        }
        if(digits%2===0){
            count++;
        }
    }
    return count;
};

console.log(findNumbers([1,22,333,13,4444,78,863]));