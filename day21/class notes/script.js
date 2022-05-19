//Module 04 -
// whats is synchronus(sequenctial, Js is by default sequential) vs asynchronus(we will make js Async)
//

// setTimeout  is an inbuilt async function in the Js.
//It adds some delay to any function,
// it will take two parameter 1. Function and 2. Time in Miliseconds

console.log("first");
console.log("third");
setTimeout(() => {
  //setTimeout function
  console.log("this is delayed");
}, 3000);
console.log("second");

//call stack follows LIFO (last in first out)

var f1 = () => {
  f2(); //callback function
  console.log("say hi");
};

var f2 = () => {
  console.log("say hello");
};

f1();

//WebAPI deals with execution of the handing of blocking code
//setTimeout and setTimeInterval are blocking code
// callback queue it keeps track of the async functions in the order they come
//eventloop is an intermidiate function to check the call stack, if its
// empty, the functions in callback queue will be pulled to the callstack
//WebAPI>Callback Queue>Event Loop Checks if call stack is empty>Call Stack
//

// What is Callback?
// When a function takes another function as a parameter,
//the fucntion which is taken as the parameter is called Callback Function

//naming a call back function, bar function is being named as saybye function
function foo(names, saybye) {
  console.log("say hi");
  saybye(names);
}

function bar(names) {
  console.log("say bye" + names);
}

setTimeout(foo, 2000, "John Doe", bar);

//
