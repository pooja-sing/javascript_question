// Write a function that takes in a string and retruns string the reversed

function reverseString(str){
     
        let newString = "";
    for(let i=str.length-1; i>=0; i--){
        newString +=str[i]

    }
    return newString
}
let newStr="Hello"
console.log(reverseString(newStr))