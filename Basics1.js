//To get the Basics7 class here
const Person=require('./Basics7')

//catch the class here

//create and object and send values
let person=new Person("Shreya","Madhu")

console.log(person.fullName())


//To print on console
console.log("Hello World")

//these are comments
/*
multi line comments
*/

//declaring variables
//varibales can hold data with any type of data, no need to explicitly tell the data type
//till ES5
var a=4

//from java script ES6, const and let have been introduced
//var and let are same , const is diff - these are identifiers
let b=5
console.log(b)

//to get the data type of variable
console.log(typeof(b))

let c="priya"
console.log(typeof(c))

let required=true
console.log(typeof(required))

let d=235.67
console.log(typeof(d))

//null and undefined - other two data types

//let c=a+b (it didnot work)
//we can reassign
c=a+b //reassigning is allowed in let
console.log(c)
//assignment operations
let sum=a+b
console.log(sum)

//we cannot redeclare varibale with let keyord
//with var we can redeclare variable

//to reverse the boolean
console.log(!required)

//let and const diff
// const is constant, we cannot reassign




