console.log('hello World');

//what is js?
// -> JS is high level, object based multi-pradigm, interpreted programming language. 
// -> It was developed by Netscape in 1995 and later it became open source.
// -> The main purpose of JavaScript is to make the web more interactive.

//let's start with basic syntax:
console.log("Hello world"); //this will print hello world on browser console

//data types in javascript
var num = 20;
var str = "I am a string";
var bool = true;
var nullVar = null;
var undef = undefined;

//operators
num++; //post increment operator
--num; //pre decrement operator
num += 3; //addition assignment operator
str = 'This is my new string';
bool = !bool; //boolean not operator
nullVar == undef; //checking for null or undefined values

if (typeof (nullVar) === 'undefined') {
    console.log('variable is undefined');
} else if (nullVar === null) {
    console.log('variable is null');
}

//control flow statements
for (var i = 0; i < 5; i++) {
    console.log(i);
}
var arr = [1, 2, 3];
for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

//array methods
var arr = ['apple', 'banana', 'cherry'];
arr.push('date'); //add element at last index
console.log(arr);
arr.pop(); //remove element from last index
console.log(arr);
arr.shift(); //removes first element
console.log(arr);
arr.unshift('grape'); //add element at first index
console.log(arr);
arr.splice(2, 0, 'kiwi'); //insert elements at specific position
console.log(arr);
arr.sort((a, b) => b - a); //sort array in descending order
console.log(arr);
//function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(4, 6));

//object literal
let person = { name: 'John Doe', age: 30 };
console.log(person.age);
delete person.age;
console.log(person);

//class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}
const myCar = new Car('Toyota', 'Corolla', 2005);
console.log(myCar.getDescription());

//inheritance   
class Vehicle {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return `This is a ${this.type}`;
    }
}
class Bike extends Vehicle {
    constructor(color) {
        super("bike");
        this.color = color;
    }
    getColor() {
        return `The bike has the color of ${this.color}.`
    }
}
const myBike = new Bike("red");
console.log(myBike.getType());
console.log(myBike.getColor());
//array methods
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]);
fruits.push('grape');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);
fruits.splice(2, 0, 'orange');
console.log(fruits);
//object methods
// let person = {firstName: "John", lastName:"Doe"};
// console.log(`${person.firstName} ${person.lastName}`);