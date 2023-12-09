// datatype is Dinamic programming langauge, the type of value hold by a veriable can change by during time
// DAta type is offers to what  kind/type od value a veriable
// in java we have primitive data types and reference data types

//In Data Types: 
// 1. Premative Data Types: These data thypes hold a value directly within their variable and do not need to be referenced by another object. 
// Type of Premative Data Types are:-

/* 
a. Number,
ex:
 let num1 = 10;
 let num2 = 38.093
b. Sting:
let firstName = "Ram"
let address = "KTM"


c. Boolen:-
let isMarried = true
let hasCar = false

d. Undeined: - 
If a variable is declared and value is not assigned at that time that time it holds undefined datatype;
let age;
console.log(age);

e. null:-
It is an object with all properties set as null
let age = null

f. Symbol:-
Symbols are used for unique values
let id = Symbol(1)

g. bigint:-
BigInt is used when you want to store large numbers like 10000000000000000
let largeNUm = 10n

*/


//2 Non-Premative(Refrenced) Data Types: These data types do not hold a value directly within their variable and need to be referenced by another object.

//a. Array
let a = [1, 2, 3, 4, 5]
console.log(typeof (a));

//b. Object
let id = Symbol(1)
console.log(id);

let largeNUm = 10n
console.log(typeof(largeNUm));

let arr1 = [ 1, 2, 3]
let arr2 = [...arr1]
arr2.push(4)
console.log("Original array", arr1);
console.log(arr2);