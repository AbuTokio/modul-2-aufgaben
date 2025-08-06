import "./style.css"

enum ClothingColor {
  Gelb = "#FFFF00",
  Orange = "#FFA500",
  Pink = "#FFC0CB",
  Blau = "#1E90FF",
  Lila = "#800080",
  Grau = "#808080",
}

// console.log(allColors)

// const getEnumKeyByValue = (ClothingColor: any, value: string) => {
//   return Object.keys(ClothingColor)[Object.values(ClothingColor).indexOf(value as typeof ClothingColor)]
// }

// function getColorName(color: string) {
//   const col = Object.entries(ClothingColor).find(([, value]: [string | undefined, ClothingColor]) => value === color)
//   if (col) {
//     return col[0]
//   } else {
//     return "Error"
//   }
// }

// console.log(getEnumKeyByValue(ClothingColor, ClothingColor.Lila))
// console.log(getColorName(allColors[0]))

const colors: [string, ClothingColor][] = Object.entries(ClothingColor)
const buttonContainer = document.querySelector<HTMLDivElement>(".color-buttons")

colors.forEach(([key, value]) => {
  if (buttonContainer) {
    const btn = document.createElement("button")
    btn.style.backgroundColor = value
    btn.textContent = key
    buttonContainer.append(btn)
  }
})
