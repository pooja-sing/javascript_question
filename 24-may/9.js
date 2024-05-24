// Write a function that takes in an array of string  and return the shortest string in the array

function shortArray(arr){
    if(arr.length==0){
        return 0;
    }
    let shortest =arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i].length<shortest.length){
            shortest=arr[i]
        }
    }
    return shortest

}
let newsrt=["hello","ram","sita"]
let newshort=shortArray(newsrt)
console.log(newshort)