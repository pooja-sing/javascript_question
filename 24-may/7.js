// write a function that takes in a string and retrun true if the string  is palindrome .false otherwise

function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(inputString)); // Output: true
