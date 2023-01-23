document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color = 'red'
})



 // <p class = 'two' id = 'one' name = 'nm'>para</p>

 // element section

 // tagname
 let tagname = document.querySelector('p')
 console.log(tagname)


 // class
 let classname = document.querySelector('.two')
 console.log(classname)



// id
let idN = document.querySelector('#one')
console.log(idN)


// Anyattribute

// document.querySelector('p[name ='nm']')

//<h3 class = 'cd' id = 'ab' name = 'nma'>head</h3>

// tagname

let tg = document.querySelector('h3')
console.log(tg)

// class
let cl = document.querySelector('.cd')
console.log(cl)

// id

let id = document.querySelector('#ab')
console.log(id)

// anyattribute

// let at = document.querySelector('h3[name = 'nma']')