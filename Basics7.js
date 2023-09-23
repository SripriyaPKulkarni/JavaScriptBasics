//Classes introduced ES6
//class were rapped in ojects but after ES6 - its separate

module.exports=class Person{

    //class variables
    age=27

    ///properties
    get location(){
        return "Canada"
    }
    constructor(firstName,lastName){
    
        //instance variables
        this.firstName=firstName
        this.lastName=lastName
        //after assigning we can usre it across framework
    }

    //method or function
    fullName(){
        console.log(this.firstName+this.lastName)
    }
}

/*let person=new Person("Priya","K")
let person1=new Person("Sri","Priya")
console.log(person.age)

// printing the get method
console.log(person.location)



//Person is an entity which holds all the details
//we can create property by getter method also

//constructor is a method which executes default whenever you craete an object of the class

console.log(person.fullName())

console.log(person)

console.log(person1)*/