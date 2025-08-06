import "./style.css"

const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
]

console.log(heroArr)

function showHeroesCleaned() {
  const filteredHeroArr = heroArr.filter((value) => {
    return value != undefined && value != null
  })

  console.log(filteredHeroArr)
}

showHeroesCleaned()
