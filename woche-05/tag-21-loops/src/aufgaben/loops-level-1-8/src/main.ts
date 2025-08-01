import "./style.css"

const outputElement = document.querySelector<HTMLDivElement>(".output")

let counter = 1

if (outputElement) {
  do {
    if (counter % 2 === 0) {
      outputElement.textContent += counter.toString() + "\n"
    }
    counter++
  } while (counter <= 20)
}
