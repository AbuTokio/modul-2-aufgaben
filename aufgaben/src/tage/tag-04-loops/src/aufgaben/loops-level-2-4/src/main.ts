import "./style.css"

function addToFifty(): void {
  const limit = 50
  let counter = 0

  while (counter < limit) {
    const addNumber = Number((Math.random() * 10).toFixed())
    console.log("Adding:", addNumber)
    counter += addNumber
  }

  console.log(counter + "> 50. Stopping right here.")
}

addToFifty()
