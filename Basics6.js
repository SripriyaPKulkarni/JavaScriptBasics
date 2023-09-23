//object is collection of properties
//Java Script Objects
//property can be in key value pair -Key will be always string , value can be any datatype

let person= {

    firstName: 'Priya',
    lastName: 'K',
    age : 27,
    fullName: function(){
        //this represents current Object
        this.firstName+this.lastName
        console.log( this.firstName+this.lastName)
    }

}
person.firstName
console.log(person.firstName)

//to get the function output
console.log(person.fullName())

console.log(person['lastName'])

//we can change the property value at run time
person.firstName='Sri Priya'

console.log(person.firstName)

person.gender='female'

//to print the object- it displays key value pair
console.log(person)

delete person.gender
console.log(person)

//check whether the property exists in an object
'gender' in person
console.log('gender' in person)

//print the values of all the properties, need to use for loop, we can iterate through properties of object
//print all the values of Java Script Objects
for(let key in person){

    person[key]
    console.log(person[key])
}

//to get the function output
console.log(person.fullName())

