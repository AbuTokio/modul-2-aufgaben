import "../../../style.css"
import { Person } from "./classes/Person"
import { SchoolClass } from "./classes/SchoolClass"

let persons: Person[] = []

for (let i = 1; i <= 20; i++) {
  persons.push(new Person(i, "Random Name " + i, "Random Last Name " + i, new Date(1996, 0, i)))
}

const schoolClass = new SchoolClass(1, "Klasse 9A", persons)
console.log(schoolClass)

console.log(schoolClass.persons)
