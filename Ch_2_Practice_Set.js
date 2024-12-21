 // Question 1

let age = prompt("Enter Your age")
age = Number.parseInt(age)
if(age>10 && age<20){
    alert("Age Lies Between 10 and 20")
}
else{
    alert("Age Does not Lies in between 10 and 20")
}

// Question 2

let day = prompt("Enter a Number Between 1 to 7")
day = Number.parseInt(day)

switch(day){

    case 1:
        alert("Today is Monday")
        break;
    case 2:
        alert("Today is Tuesday")
        break;
    case 3:
        alert("Today is wednesday")
        break;
    case 4:
        alert("Today is Thursday")
        break;
    case 5:
        alert("Today is Friday")
        break;
    case 6:
        alert("Today is saturday")
        break;
    case 7:
        alert("Today is Sunday")
        break;
    default:
        alert("Provide a Correct input")
}

// Question 3

let num = prompt("Enter a number to check")
num = Number.parseInt(num)

if(num%2 ==0 && num%3 == 0){
    alert("The Number is divisible by 2 and 3")
}
else{
    alert("The Number is not divisible by 2 and 3")
}

// Question 4

let num1 = prompt("Enter a number to check")
num1 = Number.parseInt(num)

if(num1%2 ==0 || num1%3 == 0){
    alert("The Number is divisible by 2 or 3")
}
else{
    alert("The Number is not divisible by 2 or 3")
}

// Question 5

let age1 = 12
let a = age1>18?"You can Drive":"You can not Drive"
console.log(a)