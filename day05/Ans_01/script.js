//************************************* Print odd numbers in an Array
// Arrow Function
// Input
// const n = 10;
// //function
// var arr01 = []; // declaring an empty array for answers
// const oddNums = (n) => {
//   for (let i = 1; i < n + 1; i++) {
//     if (i % 2 === 0) {
//       arr01.push(i);
//     }
//   }
//   return arr01;
// };
// console.log(oddNums(n));

// Anonymous Function
// const oddNums = function () {
//   let arr01 = [];
//   let n = 10;
//   for (let i = 1; i < n + 1; i++) {
//     if (i % 2 === 0) {
//       arr01.push(i);
//     }
//   }
//   return arr01;
// };
// console.log(oddNums());

// IIFE Function
// (function () {
//   let arr01 = [];
//   let n = 10;
//   for (let i = 1; i < n + 1; i++) {
//     if (i % 2 === 0) {
//       arr01.push(i);
//     }
//   }
//   console.log(arr01);
// })();

//***********************************************************Convert all the strings to title caps in a string array

//Arrow Function
//Input
//var inputStr = "Hello World";
// //function and declarations
// var arr02 = inputStr.split("");
// var arr03 = [];
// arr02.forEach((element) => {
//   arr03.push(element.toUpperCase());
// });
// console.log(arr03);

// Anonymous Function

// let convertCaps = function () {
//   let inputStr = "Hello World"; //taking Input
//   let arr01 = inputStr.split(""); // splitting the above string into array
//   let arr02 = []; // Blank Array for result
//   //looping through array, converting to uppercase and pushing it into result array
//   for (let lp1 = 0; lp1 < arr01.length; lp1++) {
//     arr02.push(arr01[lp1].toUpperCase());
//   }
//   return arr02;
// };
// //triggering the function
// console.log(convertCaps());

// IIFE Function
// (function () {
//   let inputStr = "Hello World"; //taking Input
//   let arr01 = inputStr.split(""); // splitting the above string into array
//   let arr02 = []; // Blank Array for result
//   //looping through array, converting to uppercase and pushing it into result array
//   for (let lp1 = 0; lp1 < arr01.length; lp1++) {
//     arr02.push(arr01[lp1].toUpperCase());
//   }
//   console.log(arr02);
// })();

//*********************************************************************Sum of all numbers in an array */

//Arrow Function

// let sumNum = (arr) => {
//   let sumRes = 0;
//   for (let lp1 = 0; lp1 < arr.length; lp1++) {
//     const element = arr[lp1];
//     sumRes = sumRes + element;
//   }
//   return sumRes;
// };
// console.log(sumNum([2, 3, 4, 5, 6, 7]));

// Anonymous Function
// let sumNum = function (arr) {
//   let sumRes = 0;
//   for (let lp1 = 0; lp1 < arr.length; lp1++) {
//     const element = arr[lp1];
//     sumRes = sumRes + element;
//   }
//   return sumRes;
// };
// console.log(sumNum([2, 3, 4, 5, 6, 7]));

// IIFE Function
// (function () {
//   let arr = [2, 3, 4, 5, 5, 6];
//   let sumRes = 0;
//   for (let lp1 = 0; lp1 < arr.length; lp1++) {
//     const element = arr[lp1];
//     sumRes = sumRes + element;
//   }
//   console.log(sumRes);
// })();

// **************************************************************Return all the prime numbers in an array

//Arrow Function
// var filterByPrime = () => {
//   let arr = [2, 3, 4, 5, 6, 7, 8, 9, 23, 345, 456, 65];
//   let resArr = [];
//   var isPrime =  (num)=> {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };
//   for (let lp1 = 0; lp1 < arr.length; lp1++) {
//     const element = arr[lp1];
//     if (isPrime(element)) {
//       resArr.push(element);
//     }
//   }
//   return resArr;
// };
// console.log(filterByPrime());

// Anonymous Function
// var filterByPrime = function () {
//   let arr = [2, 3, 4, 5, 6, 7, 8, 9, 23, 345, 456, 65];
//   let resArr = [];
//   var isPrime = function (num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };
//   for (let lp1 = 0; lp1 < arr.length; lp1++) {
//     const element = arr[lp1];
//     if (isPrime(element)) {
//       resArr.push(element);
//     }
//   }
//   return resArr;
// };
// console.log(filterByPrime());

// IIFE Function
// (function () {
//   let arr = [2, 3, 4, 5, 6, 7, 8, 9, 23, 345, 456, 65];
//   let resArr = [];
//   var isPrime = function (num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };
//   for (let lp1 = 0; lp1 < arr.length; lp1++) {
//     const element = arr[lp1];
//     if (isPrime(element)) {
//       resArr.push(element);
//     }
//   }
//   console.log(resArr);
// })();

// **************************************************************Return all the palindromes in an array
//***********Arrow Function
// //Get User Input
// var userInputArr = prompt("Enter a list of staring, with space ' ' ")
//   .trim()
//   .split(" ");
// //Start function return array of Palindromes
// let retrunArrPalindromes = (inputArr) => {
//   // create a blank result catching array
//   var resArr = [];
//   //create a function to check if each string in the array is a palindrome
//   let isPalindrome = (inString) => {
//     return inString.split("").reverse().join("") === inString;
//   };
//   // use foreach to loop through all the elements of the array
//   // check if they are palindromes, if yes push the element to the resArray
//   inputArr.forEach((element) => {
//     if (isPalindrome(element)) {
//       resArr.push(element);
//     }
//   });
//   //return result array resArr
//   return resArr;
// };
// // Call the return array of palindromes, with userInputArr as an input
// console.log(retrunArrPalindromes(userInputArr));

//Arrow Function
//Get User Input
// var userInputArr = prompt("Enter a list of staring, with space ' ' ")
//   .trim()
//   .split(" ");
// //Start function return array of Palindromes
// let retrunArrPalindromes = (inputArr) => {
//   // create a blank result catching array
//   let resArr = [];
//   //create a function to check if each string in the array is a palindrome
//   let isPalindrome = (inString) => {
//     return inString.split("").reverse().join("") === inString;
//   };
//   // use foreach to loop through all the elements of the array
//   // check if they are palindromes, if yes push the element to the resArray
//   inputArr.forEach((element) => {
//     if (isPalindrome(element)) {
//       resArr.push(element);
//     }
//   });
//   //return result array resArr
//   return resArr;
// };
// // Call the return array of palindromes, with userInputArr as an input
// console.log(retrunArrPalindromes(userInputArr));

// // **********Anonymous Functions
// //input array of srings
// const arrayOfString = ["mam", "dad", "madam", "son"];

// // Creating isPalindrome Anonymous function
// const isPalindrome = function (inputStr) {
//   return inputStr.split("").reverse().join("") === inputStr;
// };

// //Creating a Higher Order Function getPalindromes
// //and creating parameters to take an array
// //and passing functionOfPalindromes as callback
// const getPalindromes = function (inputArr, functionOfPalindrome) {
//   // creating an result array resArr
//   let resArr = [];
//   // using for each to loop through the array
//   inputArr.forEach((element) => {
//     // using conditional statement to filter and push to result array resArr
//     if (functionOfPalindrome(element)) {
//       resArr.push(element);
//     }
//   });
//   return resArr;
// };
// console.log(getPalindromes(arrayOfString, isPalindrome));

//********************************IIFE Function */

// **************************************************************Return median of two sorted arrays of the same size

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];

var ar3 = ar1 + ar2; //merged array
console.log(ar3);
//sort the array

// **************************************************************Remove duplicates from an array
// **************************************************************Rotate an array by k times
