// // ****************************In class Assignment getElementById
// var foo = () => {
//   let firstName = document.getElementById("firstName").value;
//   console.log(firstName);
//   let middleName = document.getElementById("middleName").value;
//   console.log(middleName);
//   let lastName = document.getElementById("lastName").value;
//   console.log(lastName);
// };

//converting below simple DOM js to Functional JS

// var container = document.createElement("div");
// container.setAttribute("class", "container");
// var row = document.createElement("div");
// row.setAttribute("class", "row");
// var col = document.createElement("div");
// col.setAttribute("class", "col-1");

// row.append(col);
// container.append(row);
// document.body.append("container");

// var container = cr_ele("div", "class", "container");
// var row = cr_ele("div", "class", "row");
// var col_1 = cr_ele("div", "class", "col-1");
// row.append(col_1);
// container.append(row);
// document.body.append(container);

// function cr_ele(tagname, attrname, attrvalue) {
//   var ele = document.createElement(tagname);
//   ele.setAttribute(attrname, attrvalue);
//   return ele;
// }
