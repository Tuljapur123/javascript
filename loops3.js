// while loops

// initiliziation
// while(condition check){
  //  Statement
  // increment or decrement
//}

// program 1 
// print 1 to 5 

let i = 1
while(i <= 5){
    console.log(i)
    i++
}

// program 2 
// print table of 2 

let i2 = 2
while(i2 <= 20){
    console.log(i2)
    i2 = i2 + 2
}

// program 3 
// print table of 3 

let i3 = 3
while(i3 <= 30){
    console.log(i3)
    i3 = i3 + 3
}

// program 4 

i4 = 5
while(i4 >= 1){
    console.log(i4)
    i4--
}

// program 5 
// break statement with while loops
console.log('-------------------------')
i5 = 1
while(i5 <= 5){
    if(i5 == 3){
        break;
    }
    console.log(i5)
    i5++
}

// program 6

i6 = 1
while(i6 <= 5){
    console.log(i6)
    if(i6 == 3){
        break;
    }
    i6++
}

// continue statement with while loops
console.log('-------------------------')
let i7 = 1
while(i7 <= 5){
    if(i7 == 2){
        i7++
        continue;
    }
    console.log(i7)
    i7++
}

