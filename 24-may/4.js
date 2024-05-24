// Write a function that takes in array of string and return a new array with each string reversed
function arrString(arr){
    let reversestr=[]
    for(i=0;i<arr.length;i++){
      let  reversestred =arr[i].split("").reverse().join('')
        reversestr.push(reversestred)


    }
    return reversestr

}
let newstr=["hello","ram","shayma"]
let newarr=arrString(newstr)
console.log(newarr)