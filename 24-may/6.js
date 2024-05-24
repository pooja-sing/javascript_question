// write a function that takes in a number and retrun true if the number is prime .false otherwise

function isPrime(number) {
    if (number <= 1) {
        return false; 
    }
     if (number === 2) {
        return true; 
    }
    if (number % 2 === 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false; 
         }
    }
    return true; 
}
const num = 1;
console.log(isPrime(num)); 
