document.write("This is a JavaScript code<br>");
window.alert(5 + 6);

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
    buttonA.textContent = "Try again!";
    headingA.textContent = `${count} clicks so far`;
    count += 1;
};

// Variables and types

var myName;  //'var' is almost the same as 'let' but old and error prone

myName = "Kirill";  //string

let myAge = 20;  //number

document.write("<br>My name " + myName + ", my age " + myAge + "<br>");

let iAmAlive = true;  //boolean
let test = 6 < 3;

let myNameArray = ["Chris", "Bob", "Jim"];  //arrray
let myNumberArray = [10, 15, 40];
myNameArray[0];  // should return 'Chris' inside console
myNumberArray[2];  // should return 40 inside console

let dog = { name: "Spot", breed: "Dalmatian" };  //object
dog.name;  //return informstion in object

const PI = 3.14;  //constant


// Type number

let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true


// Objects

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    isAdmin: null,
    "likes birds": true
  };

document.write("<br>Accesing keys of object user: <br><br>")
document.write("Name: " + user.name + ", Age: " + user.age + "<br>")


// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


//For loop to access key names and their values
for (let key in user) {
    // keys
    document.write("<br>" + key + "<br>");  // name, age, isAdmin
    // values for the keys
    document.write( "<br>" + user[key] + "<br>"); // John, 30, true
  }