import "../../../style.css"

const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
]

const actorsReference = oldHollywoodActors

actorsReference.push("Marilyn Monroe")

console.log("oldHollywoodActors:", oldHollywoodActors)
console.log("actorsReference:", actorsReference)

const copy1_oldHollywoodActors: string[] = oldHollywoodActors.concat()
const copy2_oldHollywoodActors: string[] = oldHollywoodActors.slice()
const copy3_oldHollywoodActors: string[] = [...oldHollywoodActors]

console.log("---------------------------------------------------------------------")
console.log("oldHollywoodActors:", oldHollywoodActors)
console.log("copy1_oldHollywoodActors - concat:", copy1_oldHollywoodActors)
console.log("copy2_oldHollywoodActors - slice:", copy2_oldHollywoodActors)
console.log("copy3_oldHollywoodActors - spread-operator:", copy3_oldHollywoodActors)
console.log("---------------------------------------------------------------------")
copy1_oldHollywoodActors.pop()
console.log("copy1_oldHollywoodActors - concat:", copy1_oldHollywoodActors)
console.log("---------------------------------------------------------------------")
copy2_oldHollywoodActors.unshift("Charlie Chaplin")
console.log("copy2_oldHollywoodActors - slice:", copy2_oldHollywoodActors)
console.log("---------------------------------------------------------------------")
copy3_oldHollywoodActors.shift()
console.log("copy3_oldHollywoodActors - spread-operator:", copy3_oldHollywoodActors)
