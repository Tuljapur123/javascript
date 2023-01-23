let kishan = {
    firstname: 'kishan',
    lastname:'kathewad',
    age:26
}
console.log(kishan.firstname)

let kishan2 = {
    firstname: 'kishanA',
    lastname:'kathewad',
    age:26
}

// template ----- objects

class Person {
    firstname = 'amol'
    lastname = 'rao'
    age = 25
    rollno = 26
}

let poorva = new Person()
console.log(poorva)
poorva.firstname = 'kishan'
poorva.lastname = 'kathewad'
console.log(poorva)

// updating the value at the time of object creation

class Students {
    constructor(fn,ln,ag,rl){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollno = rl
    }
}

let poonam = new Students('poonam','kale',25,28)
let ajay = new Students('ajay','patil',27,45)
console.log(poonam)
console.log(ajay)

poonam.city = 'mumbai'
console.log(poonam)

// set method
// map method
