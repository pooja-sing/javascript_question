// Write a function that takes in an array of number and return the largest number in the array
function findLargest(arr){
    if(arr.length==0){
        return 0;
    }
    let largest=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            largest =arr[i];
        }
       


    }
    return largest;

}
let newarr=[34,56]
let newlar=findLargest(newarr)
console.log(newlar)