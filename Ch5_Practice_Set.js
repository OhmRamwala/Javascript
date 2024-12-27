// Question 1

// let nums = [1,2,3,4,5,6,7,8,9]

// let value = prompt("Enter a value to add into the array")
// // nums[nums.length] = Number.parseInt(value)
// nums.push(Number.parseInt(value))
// console.log(nums)

// Question 2 

// let value1
// do{
//     value1 = prompt("Enter a value to add into the array")
//     nums.push(Number.parseInt(value1))
// }while(value1!=0)

// console.log(nums)

// Question 3

// let nums = [1,2,34,23,10,23,10,30,230,220,90]

// let newArray = nums.filter((element) => {
//     return element%10==0
// })
// console.log(newArray)

// Question 4

// let nums = [1,2,34,23,10,23,10,30,230,220,90]

// nums2 = nums.map((element) => {
//     return element*element
// })

// console.log(nums2)

// Question 5

let nums = [1,2,3,4,5,6,7,8,9,10,11]

let fact = nums.reduce((value1,value2) => {
    return value1*value2
})
console.log(fact)
