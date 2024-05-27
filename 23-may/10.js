// write a funtion that takes in an object and return the number  of properties in the objects
function countObj(obj){
    return Object.keys(obj).length
}
const myobj={
    name:"joy",
    age:30,
    "job":"software"
}
console.log(countObj(myobj))