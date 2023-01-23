let mapA = new Map()

// property
let e1 = mapA.size
console.log(e1)

// methods
// set method

mapA.set('firstname','kishan')
mapA.set('lastname','kathewad')
mapA.set('age',26)
console.log(mapA)

// get

let e2 = mapA.get('lastname')
console.log(e2)

// delete
// mapA.delete('lastname')
// console.log(mapA)

// clear

// mapA.clear()
// console.log(mapA)

let mapB = new Map([
    [1,'admin'],
    [2,'operator'],
    [3,'customer']
])
console.log(mapB)

// has method

let e3 = mapB.has(1)
console.log(e3)

// forEach method

let e4 = mapB.forEach(function(el,key){
    console.log(el,key)
})

