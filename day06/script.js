//anonymous function
var mul = function (a, b) {
  return a * b;
};

//arrow function
var mul = (a, b) => a * b;

// write a js function to generate an array between two integers of 1 step length --- normal function
var res = [];
function range(a, b) {
  if (a < b) {
    var x = a;
    var y = b;
  } else {
    var x = b;
    var y = a;
  }

  for (let i = x; i <= y; i++) {
    res.push(i);
  }

  return res;
}
console.log(range(-9, 2));

//find most frequent in the array
var arr1 = [3, "q", "q", "q", 2, 3, "q", 3, "q", 2, 4, 9, 3];
var res = [];
function countOfArr(arr) {
  let uniqueArr = new Set(arr);
  for (let i = 0; i < uniqueArr.length; i++) {
    var cnt_item = 0;
    for (let j = 0; j < arr.length; j++) {
      if (uniqueArr[i] === arr[j]) {
        cnt_item += 1;
      }
    }
    res.push([uniqueArr[i], cnt_item]);
  }
}

console.log(countOfArr(arr1));

//q4
var arr1 = [3, "q", "q", "q", 3, "q", 3, "q", 3];
var minocc = 1;
var count = 0;
var ele;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      count++;
    }

    if (minocc < count) {
      minocc = count;
      ele = arr1[i];
    }
  }
  count = 0;
}
console.log(` element ${ele} occurred ${minocc}`);
