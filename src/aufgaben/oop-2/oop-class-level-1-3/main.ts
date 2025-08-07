import "../../../style.css"
import { Animal } from "./classes/Animal"
import { Person } from "./classes/Person"
import { Gender } from "./enums/Gender"

const cat: Animal = new Animal("Kitten", 0, "Light Gray")
const owner: Person = new Person("Beta", new Date(1996, 4, 14), Gender.MALE)

console.log(cat)
cat.species = "Cat"
cat.age = 1
cat.color = "Gray"
console.log(cat.species)
console.log(cat.age)
console.log(cat.color)
console.log("")
console.log(owner)
owner.name = "AbuTokio"
console.log(owner.name)
console.log(owner.birthday)
console.log(owner.gender)
