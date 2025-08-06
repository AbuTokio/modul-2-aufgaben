import "../../../style.css"

function getHighestNumber(array: number[]): number {
  let highestNumber = array[0]

  for (let i = 1; i < array.length; i++) {
    if (highestNumber <= array[i]) {
      highestNumber = array[i]
    }
  }

  return highestNumber
}

console.log(getHighestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(getHighestNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(getHighestNumber([1, 10, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(getHighestNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 9]))
console.log(getHighestNumber([1, 2, 3, 4, 5, 10, 6, 7, 8, 9]))
