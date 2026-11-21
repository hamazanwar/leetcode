const maxSubArray =(nums)=>{
    let sum=0;
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        if(sum>max){
            max=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return max;
};

console.log(maxSubArray([1,-2,3,1,-1,5,3]));