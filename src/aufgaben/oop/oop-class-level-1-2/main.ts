import "../../../style.css"
import { SchoolClass } from "./classes/SchoolClass"

const schoolClass1 = new SchoolClass(1, "Klasse 9A")
const schoolClass2 = new SchoolClass(2, "Klasse 9B")
const schoolClass3 = new SchoolClass(3, "Klasse 9C")

console.log(schoolClass1)
console.log(schoolClass2)
console.log(schoolClass3)

schoolClass1.name = "Klasse 10A"
schoolClass2.name = "Klasse 10B"

console.log(schoolClass1)
console.log(schoolClass2)
console.log(schoolClass3)
