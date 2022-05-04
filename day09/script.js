//Array of object
var employee = [
  {
    id: 101,
    name: "Lavish",
    Designation: "Senior FUll Stack Developer",
    exp: 10,
  },
  {
    id: 102,
    name: "Shiva",
    Designation: "Junior FUll Stack Developer",
    exp: 8,
  },
  {
    id: 103,
    name: "Swapnil",
    Designation: "Linux Administrator",
    exp: 10,
  },
  {
    id: 104,
    name: "Sai",
    Designation: "System Analyst",
    exp: 14,
  },
  {
    id: 105,
    name: "Mohan",
    Designation: "Mern Stack Developer",
    exp: 12,
  },
  {
    id: 106,
    name: "Himanshu",
    Designation: "Java Developer",
    exp: 5,
  },
];

// MAP

// let employeeId = [];
// employee.forEach(x => employeeId.push(x.id));
// console.log(employeeId);

// let employeeId1 = employee.map((x) => x.id);
// console.log(employeeId1);

//REDUCE

// let totalexp = employee.reduce((sum, empl) => sum + empl.exp, 0);
// console.log(totalexp);

let highexp = employee.reduce((high, empl) => {
  if ((high.exp || 0) < empl.exp) {
    high.exp = empl.exp;
  }
}, 0);
console.log(highexp);

//FILTER
