{/* <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
        <input type="text">
        <button>add element</button> */}

let ollist = document.querySelector('ol')
console.log(ollist)

let inputText = document.querySelector('input')
console.log(inputText)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let cl = inputText.value
    let newelement = document.createElement('li')
    newelement.textContent = cl
    ollist.appendChild(newelement)
    inputText.value = ''

    
})