// destructure

// program 1 

let students = [
    {
        firstname:'kishan kathewad',
        age:26
    },
    {
        firstname:'poonam k',
        age:25
    
    }
]

let [{firstname:fn1,age:ag1},{firstname:fn2,age:ag2}] = students
console.log(fn1)
console.log(ag1)
console.log(fn2)
console.log(ag2)

// program 2 

let info2 = {
    fullname:'kishan kathewad',
    skills:["javascript","python"]
}

let {fullname,skills:[a1,a2]} = info2
console.log(fullname)
console.log(a1)