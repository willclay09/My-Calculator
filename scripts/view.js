const main = document.querySelector('main')

const xInput = document.createElement('input')
xInput.type = 'number'
xInput.placeholder = '0'
const yInput = document.createElement('input')
yInput.setAttribute('type', 'number')
yInput.placeholder = '0'

const addButton = document.createElement('button')
addButton.append('+')
const multiplyButton = document.createElement('button')
multiplyButton.append('*')
const divideButton = document.createElement('button')
divideButton.append('/')
const subtractButton = document.createElement('button')
subtractButton.append('-')
const modulusButton = document.createElement('button')
modulusButton.append('%')
const exponentButton = document.createElement('button')
exponentButton.append('**')

const outputElement = document.createElement('div')

main.append('My Calculator', xInput, yInput,
                             addButton, subtractButton, 
                             multiplyButton, divideButton, 
                             modulusButton, exponentButton,
                             outputElement)