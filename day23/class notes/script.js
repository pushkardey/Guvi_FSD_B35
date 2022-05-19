//***************FETCH API
// Fetch makes it easier to write XHR functions
// Fetch takes an API as a parameter -
// Fetch always returns a promise,
//The promise contacins readableStream,
//The ReadableStream is a packet of Data in Json
//var response=fetch(API) will ouput a promise
// var response = fetch(
//   "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
// );
// // console.log(response); // This returns a Promise
// //process the response promise using .then
// //and convert ReadableStream to Json Object
// response
//   .then((data) => data.json())
//   .then((value) => {
//     // console.log(value);
//     foo(value);
//   }) //and then console.log the value
//   .catch((error) => console.log(error)); // add a catch method to handle error in reject state

// function foo(res) {
//   //get list of countries with region Asia
//   let cntry_Asia = res.filter((ele) => ele.region === "Asia");
//   console.log(cntry_Asia);

//   //get list of all countries in Asia, and print Country, Capital, and Flag
//   cntry_Asia.forEach((ele1) =>
//     console.log(
//       ` country name ${ele1.name}, country capital ${ele1.capital}, country Flag URL ${ele1.flag}`
//     )
//   );

//   // Get total Popluation with ForEach
//   let totalPop = 0;
//   cntry_Asia.forEach((element) => {
//     totalPop = totalPop + parseInt(element.population);
//   });
//   console.log("Total Population using ForEach: " + totalPop);

//   //Get Total Population Using Reduce
//   let totalPopAsia = cntry_Asia.reduce(
//     (sum, ele2) => sum + parseInt(ele2.population),
//     0
//   );
//   console.log("Total Population using Reduce: " + totalPopAsia);
// }

// Another API - covid19api.com
//Using this print Active, Deaths,Recovered from Day 01 in console from below API
//https://api.covid19api.com/dayone/country/india
//Documentation -  https://documenter.getpostman.com/view/10808728/SzS8rjbc

// var response = fetch("https://api.covid19api.com/dayone/country/india");
// response
//   .then((data) => data.json())
//   .then((value) => {
//     // console.log(value);
//     foo(value);
//   }) //and then console.log the value
//   .catch((error) => console.log(error)); // add a catch method to handle error in reject state

// function foo(res) {
//   res.forEach((element) => {
//     console.log(
//       `Active: ${element.Active}, Deaths: ${element.Deaths}, Recovered: ${element.Recovered}`
//     );
//   });
// }

// Created Account in mockapi.io, it is  adummy server

var response = fetch("https://627dfcc0b75a25d3f3af4774.mockapi.io/students");
response
  .then((data) => data.json())
  .then((value) => {
    // console.log(value);
    foo(value);
  }) //and then pass the value to function foo
  .catch((error) => console.log(error)); // add a catch method to handle error in reject state

function foo(res) {
  res.forEach((element) => {
    console.log(
      `Name: ${element.name}, id: ${element.id}, email: ${element.email}`
    );
  });
}
