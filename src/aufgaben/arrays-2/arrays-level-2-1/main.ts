import "../../../style.css"

const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
]

console.log(woerter)

function filterByLengthOfSix(array: string[]): string[] {
  return array.filter((value) => value.length <= 6)
}

const filteredArray: string[] = filterByLengthOfSix(woerter)
console.log(filteredArray)

function filteredByLetterE(array: string[]): string[] {
  return array.filter((value) => !value.toLowerCase().includes("e"))
}

const filteredArray2: string[] = filteredByLetterE(woerter)
console.log(filteredArray2)

function filteredByMoreThanTwoVowels(array: string[]): string[] {
  return array.filter((value) => {
    let vowelCounter: number = 0
    for (let i = 0; i < value.length; i++) {
      if (
        value[i].toLowerCase().includes("a") ||
        value[i].toLowerCase().includes("e") ||
        value[i].toLowerCase().includes("i") ||
        value[i].toLowerCase().includes("o") ||
        value[i].toLowerCase().includes("u")
      ) {
        vowelCounter++
      }
    }
    return vowelCounter <= 2
  })
}

const filteredArray3: string[] = filteredByMoreThanTwoVowels(woerter)
console.log(filteredArray3)
