//Inheritance
//Inheritance is the main pillar in object oriented programming language
//One class can inherit/acquire the properties,methods of another class
//The class which inherits the properties of other class is called as sub class(derbide class, child class)
//The class whose properties are inherited are called as super class(Parent class)

const Person=require("./Basics7")
class Pet extends Person{

    get location(){
        return "BlueCross"
    }
constructor(firstName,lastName){

    //call parent class constructor
    super(firstName,lastName)
}


}

let pet=new Pet("Sam","San")

console.log(pet.fullName())

console.log(pet.location)
