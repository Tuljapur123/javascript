let firstname = 'chinmay'
let firstname2 = 'kishan'
console.log(firstname)
console.log(firstname2)

// string + string = string
// string + number = string
// number + string = string
// number + number = number

// string store value by index

let city = 'pune'
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])
console.log(city.length)

// string ---- object ---- property and method

// print all character of string

for(let i = 0 ; i < city.length ; i++){
    console.log(i)
    console.log(city[i])
}

// Methods of string


// toUpperCase method

let city2 = 'pune'
let e1 = city2.toUpperCase()
console.log(e1)


// toLowerCase method

let city3 = 'WardHa'
e2 = city3.toLowerCase()
console.log(e2)

// method chaining
let city4 = 'bhopal'
let e3 = city4.toUpperCase().toLowerCase().length
console.log(e3)

// includes method

let city5 = 'Wardha'
let e5 = city5.includes('W')
let e6 = city5.includes('w')
console.log(e5)
console.log(e6)

// startWith method

let city6 = 'Nagpur'
let e7 = city6.startsWith('r')
let e8 = city6.startsWith('Nag')
console.log(e7)
console.log(e8)

// endWith method

let e9 = city6.endsWith('ur')
console.log(e9)

// indexOf method

let city7 = 'jaipur'
let e10 = city7.indexOf('i')
let e11 = city7.indexOf('r')
console.log(e10)
console.log(e11)

// trim method

let name1 = ' kishan '
//console.log(name1.length)
let e12 = name1.trim()
console.log(e12.length)


// trimStart

let name2 = ' kishanA'
console.log(name2.length)
let e13 = name2.trimStart()
console.log(e13.length)


// trimEnd
let name3 = 'kishanAB '
console.log(name3.length)
let e14 = name3.trimEnd()
console.log(e14.length)

// charAt method
// 0   1   2   3   4   5
// j   a   i   p   u   r

let city10 = 'jaipur'
e15 = city10.charAt(4)
console.log(e15)

// slice method
