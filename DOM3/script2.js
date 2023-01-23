// {/* <h1>Headone</h1>
// <button id = 'changecolor'>changecolor</button> */}

// tagname

let tagname = document.querySelector('h1')
console.log(tagname)

// by id

let button = document.querySelector('#changecolor')
console.log(button)

button .addEventListener('click',function(){
    tagname.style.color = 'blue'

})