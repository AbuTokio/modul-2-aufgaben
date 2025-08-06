import "./style.css"

const marvelCharacters: string[] = ["Iron Man", "Captain America", "Hulk", "Black Widow", "Spider Man"]

console.log(marvelCharacters)

marvelCharacters.push("Iron Man", "Spider Man")

console.log(marvelCharacters)

const marvelCharactersAsSet = new Set<string>([...marvelCharacters])

console.log(marvelCharactersAsSet)
