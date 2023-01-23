let names = ["kishan","chinmay","ajay","vijay"]
console.log(names)

// retrive
console.log(names[2])


// Update
names[2] = "amar"
console.log(names)


/// add 
names.city = "pune"
console.log(names)



// delete

delete names.city
console.log(names)

// array store value by index

for(let i = 0 ; i < names.length ; i++){
    console.log(names[i])
    console.log(i)
}

// Object ------ does not store value by index

let info = ['kishan','kathewad',25,46]

let names2 = {
    firstname:'kishan',
    lastname:'kathewad',
    age:26,
    rollno:48
}

// retrive ----- Dot Notation and Bracket Notation
console.log(names2.firstname)
console.log(names2['firstname'])


// update ----- Dot Notation and Bracket Notation

names2.firstname = "kiran"
names2['firstname'] = 'aishwarya'
console.log(names2)


// add -----    Dot Notation and Bracket Notation

names2.city = "pune"
names2['lang'] = "hindi"
console.log(names2)


// delete ----- Dot Notation and Bracket Notation

delete names2.city
delete names2['lang']
console.log(names2)

// program 2 

let vehicle = {
    color:'red',
    type:'sedance'
}

// retrive ---- Dot Notation and Bracket Notation
console.log(vehicle.color)
console.log(vehicle['color'])



// update ---- Dot Notation and Bracket Notation

vehicle.color = "blue"
vehicle['color'] = 'pink'
console.log(vehicle)



// add ---- Dot Notation and Bracket Notation

vehicle.city = "mumbai"
console.log(vehicle)



// delete ---- Dot Notation and Bracket Notation

delete vehicle.type
console.log(vehicle)