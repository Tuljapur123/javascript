// forEach() , find () , findIndex () , some() , every ()

// forEach ()
let  names = ['kishan','sunil','ram','sham']
names.forEach(function(el,index,arr){
    // console.log('welcome'  + el)
    console.log('hello')
})

// find() method

let numbers = [11,22,52,66,87,59]
q1 = numbers.find(function(el,index,arr){
    return el > 50
})
console.log(q1)

// findIndex()


q2 = numbers.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q2)


// some ()

q3 = numbers.some(function(el,index,arr){
    return el > 100
})
console.log(q3)


// every ()

q4 = numbers.every(function(el,index,arr){
    return el > 10
})
console.log(q4)


