import "./style.css"

function createImageNames(name: string): string[] {
  let returnArray: string[] = []
  let counterPrefix = "00"

  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      counterPrefix = "00"
    } else if (i >= 10 && i < 100) {
      counterPrefix = "0"
    } else {
      counterPrefix = ""
    }

    returnArray.push(name + "_" + counterPrefix + i + ".jpg")
  }
  return returnArray
}

console.log(createImageNames("image"))
