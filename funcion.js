function calculadora(numero1, numero2, operacion) {
    switch(operacion) {
        case "+":
            return numero1 + numero2
        case "-":
            return numero1 - numero2
        case "*":
            return numero1 * numero2
        case "/":
            return numero1 / numero2
        default:
            return 0 
    } 
}

let numero1 = Number(prompt("Ingrese el primer número: "))
let numero2 = Number(prompt("Ingrese el segundo número: "))
let operacion = prompt("Ingrese la operación: ")

let resultado = calculadora(numero1, numero2, operacion)

console.log(resultado)