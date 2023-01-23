{/* <h1>Head</h1>
<input type="text">
<button>cncolor</button> */}

let headone = document.querySelector('h1')
console.log(headone)

let inputText = document.querySelector('input')
console.log(inputText)

let button = document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
    let cl = inputText.value
    headone.style.color = cl
})