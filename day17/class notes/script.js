//**********************************1st way to do DOM Manipulation ********************/
// // step 1 > create element
// var element = document.createElement("div");
// // step 2 > add content with innerHTML
// // innerHTML parses string to html tags, however, innerText doesnot parse the string to html, it just passes the string
// element.innerHTML = "<div>this is a div</div>";
// // step 3 > add element to the body
// document.body.append(element);

// //*********************************2nd and preferred way to do DOM Manipulation***************** */
// var div_element = document.createElement("div");
// var p_element = document.createElement("p");
// p_element.innerHTML="this is a p tag"
// div_element.append(p_element);
// document.body.append(div_element);

//************************************How to set Attributes like class and id to the element***************** */
//to create an element based on class
// setAttribute("attributeName", "attributeValue")

// var div_element = document.createElement("div");
// var p_element = document.createElement("p");

// div_element.setAttribute("class", "main_div");

// div_element.append(p_element);
// document.body.append(div_element);

//******************In Class Assignment */

// var div01_element = document.createElement("div");
// var div02_element = document.createElement("div");
// var div03_element = document.createElement("div");

// div01_element.setAttribute("class", "container");
// div02_element.setAttribute("class", "row");
// div03_element.setAttribute("class", "col-1");

// div02_element.append(div03_element);
// div01_element.append(div02_element);
// document.body.append(div01_element);

//***************************** Add CSS 1st way */

// var div01_element = document.createElement("div");
// div01_element.innerHTML = "this is a div with css";
// div01_element.style.backgroundColor = "green";

// document.body.append(div01_element);

//********************************add CSS using external file .... step 1> add <link rel="stylesheet" href="index.css">

// var div01_element = document.createElement("div");
// div01_element.innerHTML = "this is a div with css";
// div01_element.setAttribute("class", "main");
// document.body.append(div01_element);

// ****************************In class Assignment getElementById
var foo = () => {
  let firstName = document.getElementById("firstName").value;
  console.log(firstName);
  let middleName = document.getElementById("middleName").value;
  console.log(middleName);
  let lastName = document.getElementById("lastName").value;
  console.log(lastName);
};
