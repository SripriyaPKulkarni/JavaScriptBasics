//Strings and its methods
let day='Thursday '

console.log(day)
console.log(day.trim())


//to print length of string
console.log(day.length)

//slicing of string
console.log(day.slice(0,4))

//to get letter based on index of
console.log(day[2])//n

//to split one string into two based on a character
//Thur //day

let splitDay=day.split("s")

console.log(splitDay[0])
console.log(splitDay[1])

//to remove leading and trailing white spaces in a string -we use trim()

let date='23'

let nextDate='27'

//to get the diff 
let diffDate=parseInt(nextDate)-parseInt(date)

console.log(diffDate)

//to convert back to string
diffDate.toString()

//to concatenate two strings

let newQuote=day+"is Funday day day Day"

console.log(newQuote)

let val=newQuote.indexOf("day")

let val1=newQuote.indexOf("day",6)

console.log(val)
console.log(val1)

//how many times day has occured
let valsearch=newQuote.indexOf("day")

let count=0
//when the word day is not there it will be -1
while(valsearch!==-1){

    count++
    valsearch=newQuote.indexOf("day",valsearch+1)
}

console.log(count)

