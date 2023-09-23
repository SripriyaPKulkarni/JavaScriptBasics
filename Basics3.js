//Arrays in JS
//array is a collection of elements

//creating an array with capacity of 6
let marks=Array(6)
new Array(70,80,90,100,120,130)
//redeclaring same array is not allowed
new Array(70,80,90,100,120,130)
var mark=new Array(10,20,30,40,50,60)

var nums=[10,20,30,40,50,60]
console.log(nums.slice(2,4)) //4 exclusive -upper bound exclusive
//printing the element of an array
console.log(nums[2])

nums[2]=80


//printing the element of an array after reassigning
console.log(nums[2])

//to get the length of an array
console.log(marks.length)

//uisng let- we cannot redeclare

//to increase size of array
nums.push(65)

console.log(nums)

//to delete the element at the end
nums.pop()

console.log(nums)

//to add the element at the beginning

nums.unshift(5)

console.log(nums)

//to get the index of the element in an array
console.log(mark.indexOf(20))

//to check whether the digit 120 is present in it or not
console.log(mark.includes(120))

//to slice the array
marks.slice(2,4)
console.log(marks.slice(2,4))

var num=[10,20,30,40,50,60]

var sum=0
//using for loop
for(let i=0;i<num.length-1;i++){

    sum=sum+num[i]
}

console.log(sum)

//reduce filter map
let total=num.reduce((sum,Num)=>sum+Num,0)

console.log(total)

let scores=[20,30,45,67,89,32]

var evenscores=[]

//create an array with even nos of scores array

for(let k=0;k<=scores.length-1;k++){

    if(scores[k]%2==0){

        evenscores.push(scores[k])
    }
}

console.log(evenscores)

//optimized logic

let newFilterevenscores=scores.filter(score=>score%2==0)

console.log(newFilterevenscores)

//create new array wiyth even nos and multiple each value with 3

//map array function
let mappedarray=newFilterevenscores.map(score=>score*3)
console.log(mappedarray)

let totalValue=mappedarray.reduce((sum,val)=>sum+val,0)

console.log(totalValue)

var array=[10,20,30,40,50,60]

let maparray=array.filter(array=>array%2==0).map(array=>array*3).reduce((sum,val)=>sum+val,0)

console.log(maparray)

//sorting an array with nos and strings

//sorting a string array
let fruits=["banana","apple","mango","chikku","guava"]

fruits.sort()

console.log(fruits)
fruits.reverse()
console.log(fruits)

let numbers=[1,6,003,47,5,0]

numbers.sort() //it wont work , we have to write custom logic

console.log(numbers)

//custom logic for sorting numbers
numbers.sort(function(a,b)
{
    return a-b
})

//logic is bubble sort
let sortednos=numbers.sort((a,b)=>a-b)

console.log(sortednos)

//reversing an integer array
sortednos.reverse()
console.log(sortednos)