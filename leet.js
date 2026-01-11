// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// eg: [1,5,7,9,14]
// target: 16

// so we wanna find indices 2 and 3

var twoSum = function(nums, target) {

    let nums = [1,5,7,9,14];
    let target = 16;
// (starting point, end point, how to increment)
    for (let i = 0; i < nums.length; i++) {
      // first loop, i want to add 1+5, then next loop  1+7, then 9, etc.
      // the second integer needs to loop in the first loop
      for (let j = 1; j <nums.length; j++){
        let potentialAnswer = nums[i] + [j];
        if (potentialAnswer === target) {
          return  [i, j];
        }
      }
    }
    
};

// install node to run and test

// NEED TO ADD VALUES FOR POTENTIAL ANSWER. RIGHT NOW IM ADDING INDICES