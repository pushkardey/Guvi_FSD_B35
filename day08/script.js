//OOP concept and This keyword
//OOP = Object Oreinted Programming, it involves creation and working with objects,
// encapsulation - (hiding the implementation and techinical details from the user),
// abstraction - (),
// inheritance - (acquiring the properties from parent to the children), ****
// poly-morphism - (single application can perform multiple/different function)

//class is a template, it is a collection of properties, methods and ojbects.
//An Object is a real time entity,

class Car {
  constructor(name, color) {
    // constructor is a way of assigining values to the object, written inside class
    this.name = name; // this Keyword,
    this.color = color;
  }
  color() {
    return this.color;
  }
}

var c1 = new Car("nexon", "red"); // the NEW keyword creates a new object for the class
var c2 = new Car("vento", "blue");

// ******************** Class Examples**********************************
//OOP and this keyword in js
//object oriented programming invloves in the creationof onjects
//working with objects
//inheritance:
//class :it is a collections of properties and objects
//class is a template
//Object:an object is a real time entity

//syntax:class classname{}
class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }

  color() {
    return this.color;
  }
}
//creating a object for the car
//new :is a keyword which will create the object for the car
//syntax:var/let variablename=new Objectname();
var c1 = new Car("merown", "Rolls royce");
var c2 = new Car("red", "BMW");
//constructors:it is a special way of assigning the values to objects
//are written inside the class objects
//color and brand are the constructor parameters
//Accessing the values:
console.log(c1.brand);
//Multiple referneces for a single object
var c3 = c1;

//methods

console.log(c2.color);

//*********************************************************************************End of Class Notes*******************/

// Inheritance
