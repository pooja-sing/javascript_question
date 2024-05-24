// Write a function that takes in an array of object and return the object with the highest value of a specific property

function findObjectWithHighestProperty(objects, propertyName) {
    if (objects.length === 0) {
        throw new Error("Array is empty"); 
    }

    let highestObject = objects[0]; 

    for (let i = 1; i < objects.length; i++) {
        if (objects[i][propertyName] > highestObject[propertyName]) {
            highestObject = objects[i]; 
        }
    }

    return highestObject;
}


const objectsArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const highestAgeObject = findObjectWithHighestProperty(objectsArray, "age");
console.log("Object with highest age:", highestAgeObject); 
// Output: Object with highest age: { name: 'Charlie', age: 35 }
