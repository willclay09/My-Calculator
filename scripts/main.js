function calculator(x, y, equipment){
    const output = equipment(x, y)
    return output
}
function add(x, y){
    return x + y
}
function multiply(x, y){
    return x * y
}
function divide(x, y){
    return x / y
}
function subtract(x, y){
    return x - y
}
function modulus(x, y){
    return x % y
}
function exponent(x, y){
    return x ** y
}

const addOutput = calculator(1, 2, add)
const subtractOutput = calculator(2, 1, subtract)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide)
const modulusOutput = calculator(1, 2, modulus)
const exponentOutput = calculator(1, 2, exponent)


console.log({
    addOutput,
    subtractOutput,
    multiplyOutput,
    divideOutput,
    modulusOutput,
    exponentOutput,
})

console.assert(addOutput === 3, "Addition expected 3")
console.assert(subtractOutput === 1, "Subtraction expected 1")
console.assert(multiplyOutput === 2, "Multiplication expected 2")
console.assert(divideOutput === 0.5, "Division expected 0.5")
console.assert(modulusOutput === 1, "Modulus expected 1")
console.assert(exponentOutput === 1, "Exponent expected 1")