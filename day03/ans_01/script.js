// 4 steps in total

// step 1 - create an XHR object, this will create a new object to interact with the server via API

var request = new XMLHttpRequest();

// step 2 - opening a request, this take two params -1. HTTP METHOD , 2. API URL

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

// step 3 - sending the request

request.send();

//step 4 - once data from server is loaded and status code 200-299 is recvd, parse and show in console

request.onload = function () {
  // onload event handler
  var data = JSON.parse(request.response); //parsing from string to json
  console.log(data); //showing data in console

  //console.log(data[0].name, data[0].capital, data[0].flag);

  // looping through all the data and printing Name, Capital and Flag in console

  // ********************************----------ANSWER 01 STARTS HERE---------- ***************************

  // GENERAL FOR LOOP
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data[i].name + " : " + data[i].capital + data[i].flag);
  //     console.log(
  //       `country name : ${data[i].name}, country capital ${data[i].capital}, country flag: ${data[i].flag}`
  //     ); // template literal
  //   }

  // FOR EACH LOOP ****************************** Outputs the country object as 1st return value, index value as the second and the whole array as the third return value

  //   data.forEach((cntry, indexValue) =>
  //     console.log(
  //       `country IndexValue ${indexValue}: country name ${cntry.name}, country capital ${cntry.capital}, country flag: ${cntry.flag}`
  //     )
  //   );

  //FOR IN LOOP ********************************** Outputs the ID of each element in the array
  for (let cntryid in data) {
    console.log(
      ` country name ${data[cntryid].name}, country capital ${data[cntryid].capital}, country flag: ${data[cntryid].flag}`
    );
  }
  //FOR OF LOOP ******************************** returns the object

  //   for (let cntryObj of data) {
  //     console.log(
  //       ` country name ${cntryObj.name}, country capital ${cntryObj.capital}, country flag: ${cntryObj.flag}`
  //     );
  //   }
};

//https://api.covid19api.com/total/country/india
// country active cases ,deaths and recovered
