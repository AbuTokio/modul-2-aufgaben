import "./style.css"

const allGermanLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

function encryptString(str: string) {
  const strAsArray: string[] = str.toUpperCase().split("")
  let encryptedStr: string = ""

  for (let i = 0; i < strAsArray.length; i++) {
    if (allGermanLetters.includes(strAsArray[i])) {
      if (allGermanLetters[allGermanLetters.indexOf(strAsArray[i]) + 13]) {
        encryptedStr += allGermanLetters[allGermanLetters.indexOf(strAsArray[i]) + 13]
      } else {
        encryptedStr += allGermanLetters[allGermanLetters.indexOf(strAsArray[i]) - 13]
      }
    } else {
      encryptedStr += strAsArray[i]
    }
  }

  return encryptedStr
}

console.log(encryptString("Hello World"))
