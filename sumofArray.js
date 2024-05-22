let arr = [1, 2, 3, 4, 5, 6, 7, 8]
var sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i]
}
console.log(sum)



// using reduce methode
let summ = arr.reduce((acc, currval) => acc + currval, 0)
console.log(summ)


//using for of
let array = [1, 2, 3, 4, 5];
let summm = 0;

for (let value of array) {
  summm += value;
}
console.log(summm);


//while loop
let array1 = [1, 2, 3, 4, 5];
let sum4 = 0;
let i = 0;
while (i < array1.length) {
  sum4 += array1[i]
  i++
}
console.log(sum4)

//using foreach

array1.forEach(value => sum4 += value)
console.log(sum4)
