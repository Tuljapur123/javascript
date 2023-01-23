let List = document.querySelector('li')
let buttonC = document.querySelector('#one')
let inputText = document.querySelector('input')
console.log(List)
console.log(buttonC)
console.log(inputText)


buttonC.addEventListener('click',function(){
    let cl = inputText.value
    let newelement = document.createElement('li')
    newelement.textContent = cl
    createButton(newelement)
    List.appendChild(newelement)
    inputText.value = ''


})
function createButton(li){
    let k = document.createElement('button')
    k.className = 'remove'
    k.textContent = 'Remove'
    li.appendChild(k)

    let u = document.createElement('button')
    u.className = 'up'
    u.textContent = 'UP'
    li.appendChild(u)

    let a = document.createElement('button')
    a.className = 'down'
    a.textContent = 'Down'
    li.appendChild(a)

  
}