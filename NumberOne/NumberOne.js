let nums = [1, 2, 3];

let getPermutation = function (nums, permutations = [], swapIndex = 0) {
  if (swapIndex === nums.length - 1) permutations.push([...nums]);

  const swapsThisIteration = new Set();

  for (let i = swapIndex; i < nums.length; i++) {
    if (swapsThisIteration.has(nums[i])) continue;
    swapsThisIteration.add(nums[i]);

    [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
    getPermutation(nums, permutations, swapIndex + 1);
    [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
  }

  return permutations;
};

console.log(getPermutation(nums));
