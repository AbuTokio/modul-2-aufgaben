import "../../../style.css"

function greetUser(): void {
  const greetElement: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement

  try {
    const name: string | null = window.prompt("Wie ist dein Name?")
    if (name === "" || !name) {
      throw new Error("Name is null or empty!")
    }
    greetElement.textContent = "Hallo, " + name + "!"
  } catch (error) {
    console.error(error)
    greetElement.textContent = "Hallo!"
  }

  document.body.appendChild(greetElement)
}

greetUser()
