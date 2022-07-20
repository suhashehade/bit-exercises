const findSecondBiggest = function (nums) {
  let max = nums[0];
  let secondMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
    } else {
      if (nums[i] < max && nums[i] > secondMax) {
        secondMax = nums[i];
      } 
    }
  }

  return secondMax;
};

let nums = [12, 3, 23, 4, 7, 14];

console.log(findSecondBiggest(nums));
