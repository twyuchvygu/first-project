function wiggleSort(nums) {
  nums.sort((a, b) => a - b);
  const median = Math.floor((nums.length + 1) / 2);
  const left = nums.slice(0, median);
  const right = nums.slice(median);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) nums[i] = left.pop();
    else nums[i] = right.pop();
  }
}
