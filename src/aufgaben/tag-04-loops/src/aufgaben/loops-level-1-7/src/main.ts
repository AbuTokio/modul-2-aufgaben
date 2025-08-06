import "./style.css"

const outputElement = document.querySelector<HTMLDivElement>(".output")
let counter = 1

if (outputElement) {
  do {
    outputElement.textContent += "The number is " + counter + "\n"
    counter++
  } while (counter <= 5)
}
