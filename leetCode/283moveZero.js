var moveZeroes = function(nums) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[i];
            nums[i]=nums[k];
            nums[k]=temp;
            k++;
        }
    }
    return nums;
};

console.log(moveZeroes([1,2,0,4,3,0,9]));