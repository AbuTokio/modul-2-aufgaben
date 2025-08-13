import "../../../style.css"

function generateNumber(): number {
  const randomNumber: number = Math.floor(Math.random() * 100) + 1
  if (randomNumber === 49) {
    throw new Error("Number is 49!")
  }
  return randomNumber
}

try {
  let results: number[] = []
  for (let i = 0; i < 7; i++) {
    let generatedNumber: number = generateNumber()
    if (results.includes(generatedNumber)) {
      throw new Error(`Number ${generatedNumber} already exists in ${results.sort((a, b) => a - b)}!`)
    }
    results.push(generatedNumber)
  }
  console.log(results.sort((a, b) => a - b))
} catch (error) {
  console.error(error)
}
