import "../../../style.css"
import "./style.css"

const htmlElements = {
  timeDiv: document.querySelector(".zeit") as HTMLDivElement,
  startButton: document.querySelector("#btn") as HTMLButtonElement,
}

htmlElements.startButton.addEventListener("click", () => {
  let zeit: number = 100

  const timer: number = setInterval(() => {
    if (zeit <= 0) {
      clearInterval(timer)
    }
    htmlElements.timeDiv.textContent = zeit + "%"
    zeit--
  }, 100)
})
