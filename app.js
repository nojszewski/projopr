const body = document.querySelector('body')
const div =  document.createElement('div')

body.appendChild(div)
div.style.width = '300px'
div.style.height = '300px'
div.style.border = '1px solid black'

const p = document.createElement('p')

p.textContent = "Hello World"
p.style.fontSize = '25px'
p.style.textAlign = 'center'

div.appendChild(p)

const input = document.createElement('input')
input.type = 'text'

const goBtn = document.createElement('button')
goBtn.textContent = 'Przejdź'

goBtn.addEventListener('click', () => {
    // window.location.href = input.value
    window.open('https://' + input.value, '_blank')
})

div.appendChild(input)
div.appendChild(goBtn)

// const addBtn = document.createElement('button')
// addBtn.textContent = 'Dodaj'

// addBtn.addEventListener('click', () => {
//     const ul = document.querySelector('ul') || document.createElement('ul')
//     const li = document.createElement('li')

//     li.textContent = input.value
//     ul.appendChild(li)
//     div.appendChild(ul)
// })

// div.appendChild(input)
// div.appendChild(addBtn)

// const removeBtn = document.createElement('button')
// const showBtn = document.createElement('button')

// removeBtn.textContent = 'Ukryj'
// showBtn.textContent = 'Pokaż'

// removeBtn.addEventListener('click', () => {
//     p.classList.add('hide')
//     removeBtn.classList.add('hide')
// })

// showBtn.addEventListener('click', () => {
//     p.classList.remove('hide')
// })

// div.appendChild(removeBtn)
// div.appendChild(showBtn)

// const btnRed = document.createElement('button')
// const btnGreen = document.createElement('button')

// btnRed.textContent = 'zmień na czerwony'
// btnGreen.textContent = 'zmień na zielony'

// div.appendChild(btnRed)
// div.appendChild(btnGreen)

// btnRed.addEventListener('click', () => {
//     div.style.backgroundColor = 'red'
// })

// btnGreen.addEventListener('click', () => {
//     div.style.backgroundColor = 'green'
// })