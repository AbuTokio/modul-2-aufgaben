import "./style.css"

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// # FUNCTIONS

function isEven(n: number): boolean {
  return n % 2 == 0
}

function isOdd(n: number): boolean {
  return Math.abs(n % 2) === 1
}

function printEvenNumbers() {
  const evenNumbers: number[] = zahlen.filter(function (value) {
    return isEven(value)
  })
  console.log(evenNumbers)
}

function printOddNumbers() {
  const oddNumbers: number[] = zahlen.filter(function (value) {
    return isOdd(value)
  })
  console.log(oddNumbers)
}

printEvenNumbers()
printOddNumbers()

// # ARROW FUNCTIONS

const evenNumbers = zahlen.filter((value) => {
  return value % 2 === 0
})

const oddNumbers = zahlen.filter((value) => {
  return Math.abs(value % 2) === 1
})

console.log(evenNumbers)
console.log(oddNumbers)
