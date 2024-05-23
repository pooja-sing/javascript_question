function destroyer(arr, ...valuesToRemove) {
    // Filter the initial array to exclude the elements that are in valuesToRemove
    return arr.filter(item => !valuesToRemove.includes(item));
  }
  
  // Test the function
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Output: [1, 1]
  console.log(destroyer([1, 2, 3, 4, 5], 3, 4, 5)); // Output: [1, 2]
  console.log(destroyer(["apple", "banana", "orange"], "banana", "orange")); // Output: ["apple"]
  