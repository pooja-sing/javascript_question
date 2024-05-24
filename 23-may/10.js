// write a funtion that takes in an object and return the number  of properties in the objects
function countProperties(obj) {
    return Object.keys(obj).length
}

// Example usage
let myObject = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

console.log(countProperties(myObject));  // Output: 3