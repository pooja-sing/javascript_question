// write a function that takes in array of objects and return a new array with the values of a specific property
function arrObj(objects,propertyName){
    let propertyValues = [];

    for (let i = 0; i < objects.length; i++) {
        if (objects[i].hasOwnProperty(propertyName)) {
            propertyValues.push(objects[i][propertyName]);
        }
    }

    return propertyValues;


}
let newArrobj=[
     { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]
const ages = arrObj(newArrobj, "name");
console.log(ages); // Output: [25, 30, 35]



