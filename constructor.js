let amol = {
    firstname:'amol',
    lastname:'rao',
    age:25,
    skills:['python','java']
}

let sarika = {
    firstname:'sarika',
    lastname:'pansare',
    age:24,
    skills:['python','javascript']
}

// 100 object ---- 400
// template ----- objects

class Person {
    firstname = undefined
    lastname = undefined
    age = undefined
    skills = undefined
}

let kishan = new Person()
console.log(kishan)

// updating the value outside the class

kishan.firstname = 'kishan'
kishan.lastname = 'kathewad'
kishan.age = 25
kishan.skills = ['python']
console.log(kishan)

// updating or settting the value at the time of object creation

// constructor

class PersonB {
    constructor(fn,ln,ag,sl){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.skills = sl
    }

}

let poorva = new PersonB('poorva','vyas',25,'python')
console.log(poorva)

let amit = new PersonB('amit','sathe',26,'javascript')
console.log(amit)

// updating 

poorva.city = 'pune'
console.log(poorva)