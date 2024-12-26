// const prompt = require('prompt-sync')();
// if statement
// let a = prompt("What is your age?")
// a = Number.parseInt(a) Converts String to integer

// let a = 19

// if(a>18){
//     alert("this is a valid age")
// }
// else{
//     alert("this is not a valid age")
// }


let name1 = "Ohm"
let name2 = "Jayesh"
let sentence = `${name1} and ${name2} are friends`
console.log(sentence)

console.log(name1[0])
console.log(name2[2])
console.log(name2.length)
console.log(name2.slice(3,5)) // includes 3 but not 5
console.log(name2.slice(2))
console.log(name2.replace("Jay","mah"))  //Case Sensetive

for(let i in name2){
    console.log(name2[i])
}

// String is immutable you can not change the string you can use it in different forms but cant change it

let array = [1,2,3,4,5,6,undefined,8,null,10]
for(let i in array){
    console.log(array[i])
}

const compare = (a,b) => {
    return a-b       // b-a for descending order sorting
} 

let nums = [1,34,2,334,22,32,12,134,20,38] 
console.log(nums.sort(compare))

