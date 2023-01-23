// destructure
// program 1
let names = ['kishan','ajay','vijay','rahul']
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])

let [k1,k2,k3,k4] = names
console.log(k1)
console.log(k2)
console.log(k3)
console.log(k4)

// program 2 

let city = ['pune','nagpur','wardha','indore']

let [a1,a2,a3,a4] = city
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// program 3 

let numbers = [[1,2,3],[4,5,6]]

let [[s1,s2,s3],[s4,s5,s6]] = numbers
console.log(s2)
console.log(s5)

// program 4 
// object

let info = {
    firstname:"kishan",
    lastname:'kathewad',
    age:25
}

let {firstname,lastname,age} = info
console.log(firstname)
console.log(lastname)
console.log(age)

// program 5

let vehicle = {
    color:'blue',
    type:'sedance'
}

let {color:cl,type:ty} = vehicle
// console.log(color)
// console.log(type)

// alias

console.log(cl)
console.log(ty)

// program 6 

let family = {
    parents:{
        father:"prakash",
        mother:"sujata"
    },
    siblings:{
        sister:"pranita"
    }
}

let {parents:{father:fl,mother:ml},siblings:{sister:si}} = family
// console.log(parents)
// console.log(siblings)
console.log(fl)
console.log(ml)
console.log(si)

// program 7 

let students = {
    amol:{
        fullname:'amol rao',
        age: 32
    },
    
    poorva:{
        fullname:'poorva vyas',
        age:26
    }
}

let {amol:{fullname:fn1,age:ag1},poorva:{fullname:fn2,age:ag2}} = students
// console.log(amol)
// console.log(poorva)

console.log(fn1)
console.log(ag1)
console.log(fn2)
console.log(ag2)

