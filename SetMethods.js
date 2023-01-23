// set 

let setA = new Set()
console.log(setA)

// property

setA.size
console.log(setA)

// methods 
// add method

setA.add('chinmay')
setA.add('kishan')
setA.add('poorva')
console.log(setA)

// has method

let e1 = setA.has('kishan')
console.log(e1)

// clear

// setA.clear()
// console.log(setA)

// delete

setA.delete('chinmay')
console.log(setA)

// program 2 

let setB = new Set([22,33,44,55,66,77])

console.log(setB)

// forEach method

 setB.forEach(function(el){
    console.log(el)
})

console.log(setB.keys())
console.log(setB.values())