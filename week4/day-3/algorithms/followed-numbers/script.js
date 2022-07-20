const findFollowedNumbers = function (nums) {
  let numSet = new Set(nums);
  let followedNumbers = new Set();
  let followedNum = 0;
  nums.forEach((n) => {
    if (numSet.has(n - 1)) {
      followedNum = n - 1;
    }
    if (numSet.has(n + 1)) {
      followedNum = n + 1;
    }
    if (!followedNumbers.has(n) && !followedNumbers.has(followedNum)) {
      followedNumbers.add(n);
      followedNumbers.add(followedNum);
    }
  });
  return followedNumbers;
};

let nums = [4, 1, 3];
console.log(findFollowedNumbers(nums));
