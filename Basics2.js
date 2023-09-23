//loops and conditions in Java script
const flag=true

//if condition
if(!flag){

console.log("condition satisfied")

}else{

    console.log(flag)
    console.log("condition not satisfied")
}

//we cannot store changed values in const but it can be aletred with expression . still const hold true forever

/*while(flag){

 console.log("I am inside loop")
}*/

let i=0
while(i<10){
    i++
    console.log(i)
}

let j=0
do{
j++
}
while(j>10); //need to end do while loop with semicolon
console.log(j)

//For loop in js - when we know how many times loop has to run
for(let k=0;k<10;k++){
    console.log(k)
}

let required=true
while(required){
    console.log(required)
    required=false
}

let n=0
console.log("***********")
for(let m=1;m<=100;m++){
    if(m%2==0 && m%5==0){
        n++;
        console.log(m)
        if(n==3)
        break
    }
    
}