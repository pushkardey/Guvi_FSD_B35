// var button = document.createElement("button");
// button.setAttribute("type", "button");
// button.setAttribute("class", "btn btn-primary");
// button.innerHTML = "Click Me";
// button.addEventListener("click", foo); //in DOM there is prefix like "ON" infront of click ... in HTML we use OnClick
// document.body.append(button);

// //USING ALERT
// // function foo() {
// //   alert("foo alert");
// // }

// // USING PROMPT
// function foo() {
//   var res = prompt("enter your name");
//   console.log(res);
// }

// Difference between prompt and alert
// Allert does not take input

// Class Assignment
//TASK : https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md
// Color a span/div element content when a user moves the mouse over the element.

// Use prompt to read a value from user and display it in the span element.

// Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.

// Write a Javascript code for character counts in the textarea.
// HINT : https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers

var div = document.createElement("div");
div.setAttribute("id", "div1");
div.setAttribute("class", "div1");
div.innerHTML = "Hover Here";
div.addEventListener("mouseover", foo);

var textArea = document.createElement("div");
textArea.setAttribute("id", "div2");
textArea.setAttribute("class", "div2");
textArea.addEventListener("mouseover", foo);

document.body.append(div);
document.body.append(textArea);

function foo() {
  let tgt_div = document.getElementById("div1");
  tgt_div.style.color = "blue";
  let user_input = prompt("Enter Something here !!");
  tgt_div.innerHTML = user_input;
  let textar = document.getElementById("div2");
  textar.innerHTML = user_input.length;
}

document.querySelector("#txtar").addEventListener("keyup", bar);
function bar(event) {
  console.log(event.target.value.length);
}
