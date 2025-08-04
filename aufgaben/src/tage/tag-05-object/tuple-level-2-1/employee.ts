const mitarbeiter: [number, string, string, number][] = [
  [1, "Anna Müller", "Marketing", 52000],
  [2, "Max Schmidt", "IT", 68000],
  [3, "Lisa Becker", "Personal", 48000],
  [4, "Tom Wagner", "Vertrieb", 61000],
  [5, "Sara Klein", "Finanzen", 73000],
]

console.log(mitarbeiter)

mitarbeiter.forEach((mitarbeiter) => {
  console.log(`Nummer: ${mitarbeiter[0]}`)
  console.log(`Name: ${mitarbeiter[1]}`)
  console.log(`Abteilung: ${mitarbeiter[2]}`)
  console.log(`Jahresgehalt: ${mitarbeiter[3]}`)
})
