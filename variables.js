//variables - They are very important concept in every programing language that are used to hold (store) and mainpulate them.
// variables can store values and expressions.
// Expressions are something that will eventually resolves to a value.
// Variables hold the result of an expression, not the expression itself.


// js is Dynamically Typed Programming Language. 
// syntax:
// variable_type variable_name = value or expression    

// const a = 5;
// var b = 10;
// let c = 4;
// console.log(a, b, c);


// Rules for identifiers":
// - Must start with letter, underscore (_), dollar ($) sign, or any other non-reserved word in JavaScript.
// - Can contain letters (both uppercase and lowercase), digits (0-9), hyphens (-), underscores (_), colons (:), periods (.), and tildes (~).
// - Cannot be reserved words in JavaScript.
// - Names must be unique within their scope. If two variables have the same name, only one of them will exist at runtime.
// - Names are case sensitive.
// - Variable names cannot begin with a number.
// - Variable name must be unique within their scope.
let myName = "John";
console.log("myName", myName);
var age = 28;
console.log("age", age);
const city = 'New York';
console.log('city', city);



// Type Inference:
// When we declare variables without explicitly specifying its type, it automatically gets assigned based on the value given to it.
// When we declare variables without specifying its type, it automatically gets inferred by JS based on what we assign to it.
// When we declare a variable without specifying its type, it's inferred from the assigned value.
let num = 39;
num = 'Hello World!';
console.log(typeof num);



// JS is baclward comptible programming language.
// It means older code runs on newer version of javascript as well.
// But new features added in each release may not work in old versions.




// Var VS Let VS Const
// var -> function scoped (global scope if declared outside functions).
// let & const -> block scoped (local scope inside {} blocks).
// Block Scoping Rule:
// If you declare a variable using let or const inside another set of curly braces { }, it’s only available within those curly bra
// A variable defined by let keyword is only accessible within the block where it has been declared. It is also available within nested blocks.
// A new scope is created whenever there is a pair of curly braces {}.


/* var--> is used to declare variable which value can or may change overtime in our program..
1) variable declaration only is possible in var.
    Example :
    var firstName;  calid
    firstName = "hello"
2) Variable reDecleration is possible in var
3) Variables declared with vare are  hoisted
4) Var is function scoped

let--> is used to devlare variable which value can or may change overtime in our program
1) variable declaration only is possible in let.
    Example:
    let lastName; //valid
    lastName = "world"
2) Variable reDecleration is not possible  in let,
3)  Variables declared with let are not hoisted,
4) let is blocked Scope

Const --> is used to declare constant variables...
1) variable declaration only is not possible in const.
    Example:
    const address; //invalid
2) Variable reDecleration is not possible in const
3) Variables declared with const are not hoisted,
4) Const is block scoped.
*/

//Hosting ->
// it is the default behavour of JS which raise the variable declared with var and fuctuon declaration to the top of ots scope.
// console.log(address)
// var address = "kathmandu"
// console.log(address) 



// Characerstics of variable in jasascript
// 1. var and let are mutable variable
// 2. const is immutable variable
var name = 'John';
console.log('name', typeof name);

//Block scoping rule
if (true) {
    let x = 5;
}
console.log("x", typeof x);

// Scope : it is the region where the vaiable is declared.
//  There are two types of scope in javaScript
// 1. global Scope
//  2. Local Scope
    //a. Function Scope
    //b. Block Scope

    //Block Scope: 
    //It is created by code blocks such as if, for, while, switch etc..
    //Example:



// let y = 'hello'
// function test()
// {
//     let y = 10
//     console.log(y)

// }
// console.log(y);
// test()