import "./style.css"

type Pet = {
  tiertyp: string
  namen: string[]
}

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
]

console.log(unsereHaustiere[0].namen[1])
console.log(unsereHaustiere[1].namen[2])

unsereHaustiere.forEach((tier) => {
  if (tier.tiertyp === "Hunde") {
    tier.namen.forEach((name) => {
      console.log(name)
    })
  }
})

unsereHaustiere[1].namen[2] = "Snoppy"
unsereHaustiere[0].namen[2] = "Pinky"

console.log(unsereHaustiere)

const hamster: Pet = { tiertyp: "Hamster", namen: ["Hansi", "Flauschi"] }

unsereHaustiere.push(hamster)

console.log(unsereHaustiere)
