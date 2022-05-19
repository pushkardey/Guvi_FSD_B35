var container = document.createElement("div");
var srchBox = document.createElement("input");
srchBox.setAttribute("id", "srchBox");
srchBox.setAttribute("type", "text");
srchBox.setAttribute("required", "true");
var submitBtn = document.createElement("button");
submitBtn.setAttribute("id", "submitBtn");
submitBtn.setAttribute("onclick", "getCovidURL");
// submitBtn.setAttribute("label", "submit");
submitBtn.innerHTML = "Submit";
container.append(srchBox, submitBtn);
document.body.append(container);

function getCovidURL() {
  var country = document.getElementById("srchBox").value;
  const URL2Fetch = `https://api.covid19api.com/country/${country}`;
  console.log(URL, URL2Fetch);
  fetchCovidURL(URL2Fetch);
}

async function fetchCovidURL(URL) {
  let response = await fetch(URL);

  let data = await response.json();
  console.log(data);
}
