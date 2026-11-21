var twoSum = function (nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result = nums[i] + nums[j];
      if (result === target) {
        return [i,j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 4], 7));