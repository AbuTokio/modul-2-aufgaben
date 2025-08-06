import "./style.css"

const numberInputElement = document.querySelector<HTMLInputElement>("#number-input")
const loopButton = document.querySelector<HTMLButtonElement>("#loop-btn")
const outputElement = document.querySelector<HTMLParagraphElement>("#output")

loopButton?.addEventListener("click", function loopMe() {
  let letterO = ""

  if (numberInputElement) {
    const numberInputValue = Number(numberInputElement.value)

    for (let i = 0; i < numberInputValue; i++) {
      letterO += "o"
    }
  }

  if (outputElement) {
    outputElement.textContent = "L" + letterO + "p"
  }
})
