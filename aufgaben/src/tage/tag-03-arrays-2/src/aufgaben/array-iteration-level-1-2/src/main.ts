import "./style.css"

const drinks: string[] = [
  "Cola",
  "Apfelsaft",
  "Sinalco",
  "Traubensaft",
  "Gönrgy",
  "Orangensaft",
  "Energy Drink",
  "Eistee",
]

function stringToUpperCase(str: string): string {
  return str.toUpperCase()
}

function iLike(str: string): void {
  console.log("I like " + str)
}

const upperDrinks: string[] = drinks.map(stringToUpperCase)
console.log(upperDrinks)

drinks.map(iLike)
