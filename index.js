function hasTargetSum(array, target) {
  //this stores unique values. Unlike an array, which can contain duplicate values
  //a Set will only store each unique value once.
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) { //If the has() method returns true, it means the complement value has already been 
                                        //seen before and is present in the seenNumbers Set.
      return true;
    }
    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
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
}

module.exports = hasTargetSum;
