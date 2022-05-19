//  What are the states of Promises?  Accessing the Values of Promises. Chaining Promises, promise.all()

// Why we use Promise?
// To oversome the callback hell (nested functions) scenario, we use Promises. We use it generally while connecting to APIs.

//What are Promises?
// Promise is an object which holds the result of the asynchronus operations.

//How to write a Promise?
//var p1= new Promise((resolve,reject)=>{})
// here p1 is userdefined..it can be anything
// Inside the promise it takes a function as a parameter
// The function consist of 2 parameters
// resolve,reject
// The output will be an object

// var p1 = new Promise((resolve, reject) => {
//   resolve("the Promise is Resolved");
//   reject("the Promise is Rejected");
// });
// console.log(p1);

// The Async function, will be in pending state, after that it will either Fullfilled or Rejected, these are Promise State. based on this we will get PromiseResult / Value.

// Example of Promise
// var age = prompt("What is your Age?");
// var agePromise = new Promise((resolve, reject) => {
//   if (age >= 18) {
//     resolve("You are eligible to Vote");
//   } else {
//     reject("you are not eligible to vote");
//   }
// });
// console.log(agePromise);

// Writing a function to return promise

// To access the value inside the promise
// we use .then and .catch

// .then:is needed for the resolved state
// .catch :is needed for the rejection state

// Promise.then((value)=>console.log(value)).catch((error)=>console.log(error))

// if the promise is resolved,it will call the .then(())
//**** Single Promises */
// function foo() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => reject("this is rejected after 3 seconds"), 3000)
//   );
// }
// foo()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//  Chaining of Promises--
//Promises can handle Dependent Asynchronus Operations
// function foo(num) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(num * 2), 3000)
//   );
// }
// foo(8)
//   .then((data) => {
//     console.log(data);
//     return foo(data);
//   })
//   .then((data1) => {
//     console.log(data1);
//     return foo(data1);
//   })
//   .then((data2) => console.log(data2))
//   .catch((error) => console.log(error));

//MULTIPLE PROMISES ----
var p1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("The p1 is resolved");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("The p1 is rejected");
    }, 3000);
  }
});

var p2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("The p2 is resolved");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("The p2 is rejected");
    }, 2000);
  }
});

var p3 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("The p3 is resolved");
    }, 4000);
  } else {
    setTimeout(() => {
      reject("The p3 is rejected");
    }, 4000);
  }
});

// p1.then((data) => console.log(data)).catch((data) => console.log(data));
// p2.then((data) => console.log(data)).catch((data) => console.log(data));
// p3.then((data) => console.log(data)).catch((data) => console.log(data));

// Promise.all([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// it is going to take the Array of promises, it will wait until all the promisese are resolved.
// the output of PROMISE.ALL, will be the result of all the promises
//if any single promise is rejected all promises will be rejected

// USE Promise.allSettled
Promise.allSettled([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Read for tomorrow xmlhttp request, promise, fetch, application of promises
