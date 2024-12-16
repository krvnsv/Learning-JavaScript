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

var myName;  //'var' is almost the same as 'let' but old and error prone

myName = "Kirill";  //string

let myAge = 20;  //number

document.write("<br>My name " + myName + ", my age " + myAge + "<br>");

let iAmAlive = true;  //boolean
let test = 6 < 3;

let myNameArray = ["Chris", "Bob", "Jim"];  //arrray
let myNumberArray = [10, 15, 40];
myNameArray[0];  // should return 'Chris'
myNumberArray[2];  // should return 40

let dog = { name: "Spot", breed: "Dalmatian" };  //object
dog.name;  //return informstion in object

const PI = 3.14;  //constant
