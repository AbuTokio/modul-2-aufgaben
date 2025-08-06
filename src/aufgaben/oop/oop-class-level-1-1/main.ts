import "../../../style.css"
import { IceCreamFlavor } from "./IceCreamFlavor"

const iceCream1 = new IceCreamFlavor("Schokolade", 2, true)
const iceCream2 = new IceCreamFlavor("Vanille", 1, true)
const iceCream3 = new IceCreamFlavor("Erdbeere", 2.2, false)
const iceCream4 = new IceCreamFlavor("Waldmeister", 1.6, false)

const iceCreams: IceCreamFlavor[] = [iceCream1, iceCream2, iceCream3, iceCream4]

iceCreams.forEach((iceCream) => {
  if (iceCream.isPopular) {
    console.log(iceCream.name)
  }
})
