// let names = ['amol','ram','sham','sachin']
// console.log(names)

// program 1
// map method

let birthyear = [1989,1990,1991,1992]
ages = []

for(let i = 0 ; i < birthyear.length ; i++){
    // console.log(i)
    // console.log(birthyear[i])
    let ag = 2022 - birthyear[i]
    ages.push(ag)
}
console.log(ages)

// new map method

q1 = birthyear.map(function(el,index,arr){
    // console.log(el,index,arr)
    return 2022 - el
})
console.log(q1)



let numbers = [11,22,33,44]
q2 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q2)

// filter method 
// program 2

let nums = [44,66,77,88,33,44,56]
above50 = []

for(let i = 0 ; i < nums.length ; i++){
    // console.log(i)
    if(nums[i] > 50){
        above50.push(nums[i])
    }
}
console.log(above50)

// new method of filter 

q3 = nums.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

// reduce method
// program 3 

let total = [11,22,33]
let sum = 0
for(let i = 0 ; i < total.length ; i++){
    //console.log(i)
    sum = total[i] + sum
}
console.log(sum)

// new reduce method

q4 = total.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

// program 4 

// forEach method()

let names = ["kishan","ajay","vijay"]

names.forEach(function(el,index,arr){
    console.log('hello')
})



