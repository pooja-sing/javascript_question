function symmetricDifference(arr1, arr2) {
    
    const combinedArray = [...arr1,...arr2];
    
    const result = combinedArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
  
    return result;
  }
  
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [2, 3, 5];
  console.log(symmetricDifference(arr1, arr2)); // Output: [1, 4, 5]
  