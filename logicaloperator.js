// comparision operators

let x = 10
console.log(x)
console.log(typeof(x))

let y = "kishan"
console.log(typeof(y))

let z = false
console.log(typeof(z))

// > ,< , >= ,<= , == , != , === , !==

// entity > entity ==> Boolean=(true or false)

console.log(3 < 5) // true
console.log(3 > 5) // false
console.log(3 != 5)  // ture
console.log(3 == 5) // false
console.log(3 >= 5) // false
console.log(3 <= 5) // true
console.log(5 <= 5) // true
console.log(3 >= 5) // false

// === value and type
// !== value and type

// == value
// != value
// -----------------------------------------------
console.log(8 == '8') // true
console.log(8 === '8') // false
console.log(8 != '8') // false
console.log(8 !== '8') // true
console.log(89 == '89') // true
console.log(89 === 89) // true


// logical operator

//      AND &&
//      OR ||
//      NOT !

// AND operator &&

// true && true = true
// true && false = false
// false && true = false
// false && false = false

console.log(7 == 7 && 8 == 8)
console.log(7 == 7 && 8 < 7 )
console.log('7' === 7 && 8 == 8)
console.log(7 != 7 && 8 != 8)

// OR operator || 

// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log(7 == 7 || 8 == 8)
console.log(7 == 7 || 8 < 7 )
console.log('7' === 7 || 8 == 8)
console.log(7 != 7 || 8 != 8)

// NOT operator !

// true -- false
// false -- true

console.log(!8 != '8')


