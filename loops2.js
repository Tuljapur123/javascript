// for loops
// program 1 
// print 1 to 5 

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}
// program 2 
// print 2 table

for(let i = 2 ; i <= 20 ; i = i +2){
    console.log(i)
}

// program 3 
// print 0 to 4 

for(let i = 0 ; i < 5 ; i++){
    console.log(i)
}

// program 4 

// 10 to 1 

for(let i = 10 ; i >= 1 ; i--){
    console.log(i)
}

console.log('------------------------------------')

// break statement with for loop
 
// program 1 

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
    if(i == 2){
        break;
    }
}

for(let i = 1 ; i <= 10 ; i++){
    if(i == 5){
        break;
    }
    console.log(i)
}


// continue statement with for loop\

// program 1 

for(let i = 1 ; i <= 5 ; i++){
    if(i == 3){
        continue;
    }
    console.log(i)
}
console.log('---------------------------------')
for(let i = 5 ; i >= 1 ; i--){
    if(i == 3){
        continue;
    }
    console.log(i)
}