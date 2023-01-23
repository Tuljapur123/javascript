// slice () , splice(), concat() , fill() , flat() , join()
//             0      1         2        3        4           5
let names = ['pune','mumbai','dilhi','kolkata','banglore','jaipur']
//             -6     - 5       -4       -3       -2         -1

console.log(names.slice(1,4))
console.log(names.slice(2,-1))
console.log(names.slice(3))
console.log(names.slice(0,5))

// splice method 

let namesA = ['kishan','ajay','vijay','ram','sham']
//console.log(namesA.splice(1,2))
namesA.splice(1,2,'kk','jk')
console.log(namesA)

// concat()

let a = [11,22,33]
let b = [44,55,66]

// q1 = a.concat(b)
// console.log(q1)

q1 = b.concat(a)
console.log(q1)

// flat()

let numb = [[11,22,33],[44,55,66],[77,88,99]]
console.log(numb[2][1])

let q2 = numb.flat()
console.log(q2)

// fill()

let grade = ['A','B','C','B','A','C','A']
// q3 = grade.fill('invalid',1,5)
// console.log(q3)

q4 = grade.fill('kishan',2,6)
console.log(q4)

