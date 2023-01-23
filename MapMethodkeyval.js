// program 1 
let chinmay = {
    firstname:'chinmay',
    lastname:'deshpande',
    age:28
}
// console.log(chinmay)
// console.log(Object.keys(chinmay))
// console.log(Object.values(chinmay))
// console.log(Object.entries(chinmay))

for(let x of Object.keys(chinmay)){
    console.log(x)
}

for(let x of Object.values(chinmay)){
    console.log(x)
}

for(let [key,val] of Object.entries(chinmay)){
    console.log(key,val)
}

// program 2 

let amol = {
    firstname:'amol',
    lastname:'rao',
    age:29
}


for(let key in amol){
    console.log(key,amol[key])
}

for(let x of Object.keys(amol)){
    console.log(x)
}

for(let y of Object.values(amol)){
    console.log(y)
}

for(let [x,y] of Object.entries(amol)){
    console.log(x,y)
}

////// program 3 

let mapB = new Map([
    [1,'admin'],
    [2,'customer'],
    [3,'new']
])
mapB.size
console.log(mapB)

for(let x of mapB.keys()){
    console.log(x)
}

for(let y of mapB.values()){
    console.log(y)
}

for(let[x,y] of mapB.entries()){
    console.log(x,y)
}