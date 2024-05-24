// Write a function thats take an in array of number return the average of the number?
function arrNumber(arr){

    if(arr.length===0){
        return 0;
    }
    let sum=0;
    for(let i=0; i<arr.length; i++){
       sum += arr[i]
    }
    return sum/arr.length;


}
let newarr=[1,2,3,4,5]
let newwarr=(arrNumber(newarr))
console.log(newwarr)