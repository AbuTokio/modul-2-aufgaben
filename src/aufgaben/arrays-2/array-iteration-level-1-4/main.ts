import "../../../style.css"

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120]
console.log(fahrenheit)

const celsius: number[] = fahrenheit.map((value) => Number(((value - 32) / 1.8).toFixed()))
console.log(celsius)
