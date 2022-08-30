function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if ( (array[i] + array[j]) === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  O(n**2)
*/

/* 
  Add your pseudocode here
  Takes an element in the array and add it to the next element in the array and
   if they match the target return true if not return false.
   Repeat this process from the untill the end of the array
*/

/*
  Add written explanation of your solution here

  The first for loop iterates through the array from the first index,
  and adds the value to the value iterated by the second for loop which starts from the second index,
  and if the sum matches the target it returns true otherwise it returns false
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
