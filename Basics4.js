//block of code =function=multiple lines of code for a purpose
function add(a,b)
{
    return a+b
}

let sum=add(2,3)

console.log(sum)

//donot have name for functions --anonymous functions--function expressions

//anonymous function
let sumOfIntegers=function(c,d){
 return c+d
}

//uisng fat pie operator => ===short hand operator
let sumOfnumbers=(c,d) => c+d

sumOfnumbers(4,5)

console.log(sumOfnumbers(4,5))

//let and var diff with respect to scope
//var - till ES5 only  //let -from ES6

//var scope  is global if its declared globally , if its local , then its local -global level /function level
//let scope is global level or block levek-{}

//let and var can be reinitialized but const cannot be reintialized

var greet="Morning"

greet="Night"
function add(a,b)
{
    var greet="Evening"
    return a+b
}

if(1==1){
    var greet="Afternoon"
}

console.log(greet)

let gret="Hi"

/*function add(a,b)
{
    let greet="Hello"
    return a+b
}*/

if(1==1){
    let gret="Hello"
}

console.log(gret)