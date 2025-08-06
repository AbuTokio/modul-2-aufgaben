import "../../../style.css"

const checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6,
  27, 71, 26, 15, 78,
]

console.log(checkNumber)

const addHundredToThirds: number[] = checkNumber.map((value) => {
  if (value % 3 === 0) {
    return value + 100
  } else {
    return value
  }
})

console.log(addHundredToThirds)
