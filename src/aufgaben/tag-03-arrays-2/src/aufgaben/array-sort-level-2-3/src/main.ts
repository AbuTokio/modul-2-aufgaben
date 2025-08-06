import "./style.css"

const oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
]

const newerPainters: string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

const femalePainters: string[] = oldPainters.slice(1, 3).concat(newerPainters.slice(2, 4))
console.log(femalePainters)

const malePainters: string[] = [...oldPainters.slice(0, 1), ...oldPainters.slice(-2), ...newerPainters.slice(0, 2)]
console.log(malePainters)
