import "../../../style.css"
import "./style.css"
import { IceCreamFlavor } from "./classes/IceCreamFlavor"

const outputElement = document.querySelector(".output") as HTMLDivElement

const iceCream1 = new IceCreamFlavor("Chocolate", 2.5, true, "This is the best flavor.")
const iceCream2 = new IceCreamFlavor("Vanilla", 2.1, true)
const iceCream3 = new IceCreamFlavor("Strawberry", 2.2, false)
const iceCream4 = new IceCreamFlavor("Waldmeister", 2.3, false)

const iceCreams: IceCreamFlavor[] = [iceCream1, iceCream2, iceCream3, iceCream4]

iceCreams.forEach((iceCream) => {
  console.log(iceCream.name)
  console.log(iceCream.getTotalPrice(3))
  iceCream.printInfo()
  console.log(iceCream.getLengthOfDescription())
  console.log("---------------------------------")

  const iceCreamContainerElement: HTMLDivElement = document.createElement("div")

  const isPopularElement: HTMLParagraphElement = document.createElement("p")

  const iceCreamWrapperElement: HTMLDivElement = document.createElement("div")
  const iceCreamNameElement: HTMLHeadingElement = document.createElement("h2")
  const iceCreamInfoWrapperElement: HTMLDivElement = document.createElement("div")
  const iceCreamPriceElement: HTMLParagraphElement = document.createElement("p")
  const iceCreamScoopsElement: HTMLParagraphElement = document.createElement("p")
  let scoops: number = 0
  const iceCreamTotalPriceElement: HTMLParagraphElement = document.createElement("p")

  const addToCartElement: HTMLButtonElement = document.createElement("button")

  isPopularElement.textContent = "⭐"
  if (!iceCream.isPopular) {
    isPopularElement.style.color = "transparent"
  }
  iceCreamNameElement.textContent = iceCream.name
  iceCreamPriceElement.textContent = "Price: " + iceCream.price.toFixed(2) + " Euro"
  iceCreamScoopsElement.textContent = "Scoops: " + scoops
  iceCreamTotalPriceElement.textContent = "Total Price: " + iceCream.getTotalPrice(scoops).toFixed(2)
  addToCartElement.textContent = "+1"

  iceCreamContainerElement.appendChild(isPopularElement)

  iceCreamWrapperElement.appendChild(iceCreamNameElement)
  iceCreamInfoWrapperElement.appendChild(iceCreamPriceElement)
  iceCreamInfoWrapperElement.appendChild(iceCreamScoopsElement)
  iceCreamInfoWrapperElement.appendChild(iceCreamTotalPriceElement)
  iceCreamWrapperElement.appendChild(iceCreamInfoWrapperElement)
  iceCreamContainerElement.appendChild(iceCreamWrapperElement)
  iceCreamContainerElement.appendChild(addToCartElement)

  outputElement.appendChild(iceCreamContainerElement)

  addToCartElement.addEventListener("click", () => {
    scoops += 1
    iceCreamScoopsElement.textContent = "Scoops: " + scoops
    iceCreamTotalPriceElement.textContent = "Total Price: " + iceCream.getTotalPrice(scoops).toFixed(2)
  })
})
