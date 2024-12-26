let marks = {
    ohm:21,
    dev:24,
    harry:25,
    jack:22
} 

for(i=0;i<Object.keys(marks).length;i++){
    // console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Question 2

for(let i in marks){
    // console.log("The Marks of " + i + " are " + marks[i])
}

//Question 3

const corr=1200;
let num
while(num!=corr){
    alert("Try again")
    num=prompt("Enter a number")
}
alert("You have entered a correct number")

//Question 4

const mean = (num1,num2,num3,num4,num5) => {
    let avg = (num1+num2+num3+num4+num5)/5
    return avg
}
console.log(mean(12,29,13,24,45))