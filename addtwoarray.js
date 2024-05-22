// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let result=[]
// if(array1.length === array2.length){
//     for(i=0;i<=array1.length-1;i++){
//         result[i]=array1[i]+array2[i]
//     }

//     }else{
//     console.log("error")
// }
// console.log(result)

// Two arrays to be added
let array1 = [1, 2, 3];
let array2 = [4, 5, 6, 7, 8];

// Initialize an empty array to store the result
let result = [];

// Determine the length of the larger array
let minLength = Math.min(array1.length, array2.length);

for (let i = 0; i < minLength; i++) {
    result[i] = array1[i] + array2[i];
  }
  if (array1.length > array2.length) {
    for (let i = minLength; i < array1.length; i++) {
      result.push(array1[i]);
    }
  } else {
    for (let i = minLength; i < array2.length; i++) {
      result.push(array2[i]);
    }
  }



// Print the result
console.log(result); // Output: [5, 7, 9, 7, 8]
