import "./style.css"

const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"]

console.log("starWarsActor:", starWarsActor)

const starWarsActors: [string, string][] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
]

console.log("starWarsActors:", starWarsActors)

starWarsActors.forEach((element) => {
  console.log(`${element[1]} spielt ${element[0]}`)
})
