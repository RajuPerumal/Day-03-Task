//1. Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array
        // Get input array from the user
let input = prompt("Enter numbers separated by commas for numbers array:");
        // Split the input string into an array of numbers
let numbers = input.split(",").map(Number);
let temp = []
let oddnumbers = function(num){
    for(i=0;i<num.length;i++){
        if(num[i] % 2 !== 0){
            //console.log(num[i])
            temp.push(num[i])
        }
    }

}
oddnumbers(numbers)
console.log("Odd Numbers Are:",temp);


//b. Convert all the strings to title caps in a string array
// Define the array of strings
let stringArray = ["hello world", "good morning", "have a nice day"];

// Define an anonymous function to convert strings to title case
let convertToTitleCase = function(arr) {
    let titleCaseArray = [];
    for (let i = 0; i < arr.length; i++) {
        let words = arr[i].split(" ");
        let titleCaseWords = [];
        for (let j = 0; j < words.length; j++) {
            let firstLetter = words[j].charAt(0).toUpperCase();
            let restOfWord = words[j].slice(1).toLowerCase();
            titleCaseWords.push(firstLetter + restOfWord);
        }
        titleCaseArray.push(titleCaseWords.join(" "));
    }
    return titleCaseArray;
};

// Call the anonymous function to convert strings to title case
let titleCaseArray = convertToTitleCase(stringArray);

// Print the resulting array
console.log("Title Case Array",titleCaseArray);

//c. Sum of all numbers in an array

let sum = 0;
let sumOfArray = function(num){
for(i=0;i<numbers.length;i++){
    sum += numbers[i]
}

 }
 sumOfArray(numbers)
 console.log("Sum of Array",sum)

//d. Return all the prime numbers in an array

// Define an anonymous function to check if a number is prime
let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// Define an anonymous function to return all prime numbers in an array
let findPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        return isPrime(num);
    });
};

// Call the anonymous function to return prime numbers from the array
let primeNumbers = findPrimeNumbers(numbers);

// Print the resulting array
console.log("Prime numbers:", primeNumbers);

//e. Return all the palindromes in an array
// Define an anonymous function to check if a string is a palindrome
let isPalindrome = function(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the clean string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
};

// Define an anonymous function to return all palindromes in an array
let findPalindromes = function(arr) {
    return arr.filter(function(str) {
        return isPalindrome(str);
    });
};

//f. Return median of two sorted arrays of the same size.
const medianOfArrays = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(medianOfArrays(arr1, arr2)); // Output: 3.5

//g. Remove duplicates from an array
const removeDuplicates = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};


const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

//h. Rotate an array by k times
const rotateArray = (ar, k) => {
    const n = ar.length;
    const rotations = k % n; // Handle cases where k is larger than array length
    
    // Slice the array to separate elements that will be moved to the front and back
    const front = ar.slice(0, n - rotations);
    const back = ar.slice(n - rotations);
    
    // Concatenate the arrays to get the rotated array
    return back.concat(front);
};

// Example usage:
const arraySet = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arraySet, k)); // Output: [4, 5, 1, 2, 3]

// Do the below programs in JS with arrow functions.

// 1. Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};


printOddNumbers(numbers); // Output: 1 3 5

// 2. Convert all the strings to title caps in a string array
const convertToTitleCaps = (arr) => {
    return arr.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};


console.log(convertToTitleCaps(stringArray)); // Output: ["Hello", "World", "Javascript"]

// 3. Sum of all numbers in an array
const sumOfNumbers = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};



console.log(sumOfNumbers(numbers)); // Output: 15

// 4. Return all the prime numbers in an array
const isPrimeornot = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = (arr) => {
    return arr.filter((num) => isPrimeornot(num));
};

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPrimeNumbers(numbersArray)); // Output: [2, 3, 5, 7]

// 5. Return all the palindromes in an array
const isPalindromeornot = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};

const getPalindromes = (arr) => {
    return arr.filter((str) => isPalindromeornot(str));
};


console.log(getPalindromes(stringArray)); // Output: ["level", "radar", "madam"]

