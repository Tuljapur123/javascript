let amol = {
    firstname:'amol',
    lastname:'rao',
    age:28,
    skills:['python','javascript']
}
console.log(amol)

// your map key can be any datatype

// datatype -------  number string boolean array,userdefined


// let names = ['amol','kishan'] ------ array
// let names = 'kishan' -------- string
// property and methods

let MapA = new Map()
console.log(MapA)
let e1 = MapA.size
console.log(e1)

// methods of Map

// set method

MapA.set(1,'admin')
MapA.set(2,'customer')
MapA.set(3,'operation')
console.log(MapA)

MapA.set(1,'admin')
MapA.set('firstname','kishan')
MapA.set(true,'married')
console.log(MapA)

// get method

let e2 = MapA.get(1)
let e3 = MapA.get(3)
console.log(e2)
console.log(e3)

// delete method
MapA.delete(1)
console.log(MapA)

// clear method

// MapA.clear()
// console.log(MapA)

// set , get , delete , clear 

let MapB = new Map([
    [1,'admin'],
    [2,'customer'],
    [3,'operation']
])
console.log(MapB)

// has method ----- important mentod

let a = MapB.has(1)
let b = MapB.has(4)
console.log(a)
console.log(b)

// forEach method
MapB.forEach(function(el,key){
    console.log(el,key)
})