//++++++Pseudo Code
// Load Title and borders
// create a searchbox and submit button
// Searchbox should be able to take multiple name, seperated by coma, use inputstr.split(",")
// Fetch the data from API
// Create cards for top two countries
// add data and styles to the cards (Use Bootstrap)

//  API
// https://api.nationalize.io/?name=michael
// https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane
// use json.stingify({name:inputStr.split()})
//
//
//

// Load Title, Searchbox and Borders
//declaring varibles for Title and textBox
const titleTxt = "Predict the nationality of a name";
const placeholderTxt = "Enter Name/s";
const subTitleTxt = "Enter a Single Name or Multiple names with coma ','. ";
// make two seperate divs, 1 for title and 2 for searchBar

//creating divTitle in DOM
var divTitle = document.createElement("div");
divTitle.setAttribute("id", "divTitle");

//creating divSearch in DOM
var divSearch = document.createElement("div");
divSearch.setAttribute("id", "divSearch");

//creating div in DOM
var divContent = document.createElement("div");
divContent.setAttribute("id", "divContent");

//Append divs to Body
document.body.append(divTitle, divSearch, divContent);

// DivTtile details
divTitle.setAttribute("id", "divTitle");
divTitle.innerHTML = titleTxt;

//creating topForm in DOM
var titleForm = document.createElement("form");
titleForm.setAttribute("id", "titleForm");
//creating searchInput in DOM
var searchInput = document.createElement("input");
searchInput.setAttribute("id", "searchInput");
//creating searchButton in DOM
var searchButton = document.createElement("button");
searchButton.setAttribute("id", "searchButton");
