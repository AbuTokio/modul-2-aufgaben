import "./style.css"

function isVowel(c: string) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1
}

function getNumberOfVowels(str: string): number {
  let vowelCount = 0
  str.split("").forEach((c) => {
    if (isVowel(c)) {
      vowelCount++
    }
  })
  return vowelCount
}

console.log(
  "Fischers Fritz fischt frische Fische, frische Fische fischt Fischers Fritz:",
  getNumberOfVowels("Fischers Fritz fischt frische Fische, frische Fische fischt Fischers Fritz.")
)

console.log(
  "Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.",
  getNumberOfVowels("Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.")
)
console.log("In Ulm, um Ulm und um Ulm herum.", getNumberOfVowels("In Ulm, um Ulm und um Ulm herum."))
console.log(
  "Der Cottbuser Postkutscher putzt den Cottbuser Postkutschkasten.",
  getNumberOfVowels("Der Cottbuser Postkutscher putzt den Cottbuser Postkutschkasten.")
)
