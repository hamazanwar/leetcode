var runningSum = function(nums) {
    let arr=[];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        arr[i]=sum;
    }
    return arr;
};

console.log(runningSum([1,2,3,4,5]));