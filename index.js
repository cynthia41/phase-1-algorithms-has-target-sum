
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    
    const complement = target - array[i];
    
    for (let d = i + 1; d < array.length; d++) {
      
      if (array[d] === complement) return true;
    }
  }
  
  return false;

}

/* 
  Runtime: O(n^2)
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 6, 9, 10], 24));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 7, 9], 12));

}

module.exports = hasTargetSum;
