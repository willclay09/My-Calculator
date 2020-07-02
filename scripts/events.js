addButton.addEventListener('click', function (event){
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    outputElement.innerHTML = calculator(x, y, add)
})

subtractButton.addEventListener('click', function (event){
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    outputElement.innerHTML = calculator(x, y, subtract)
})

multiplyButton.addEventListener('click', function (event){
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    outputElement.innerHTML = calculator(x, y, multiply)
})

divideButton.addEventListener('click', function (event){
const x = Number(xInput.value)
const y = Number(yInput.value)

outputElement.innerHTML = calculator(x, y, divide)
})

modulusButton.addEventListener('click', function (event){
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    
    outputElement.innerHTML = calculator(x, y, modulus)
    })

exponentButton.addEventListener('click', function (event){
        const x = Number(xInput.value)
        const y = Number(yInput.value)
        
    outputElement.innerHTML = calculator(x, y, exponent)
        })