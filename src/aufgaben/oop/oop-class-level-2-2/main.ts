import "../../../style.css"
import { Car } from "./classes/Car"
import { Driver } from "./classes/Driver"

const porsche = new Car("Porsche", 2025, 130)
const andre = new Driver("Andre", "S.", 30, porsche)

const tesla = new Car("Tesla", 2024, 150)
const bunyamin = new Driver("Bünyamin", "K.", 29, tesla)

const bmw = new Car("BMW", 2024, 200)
const maxi = new Driver("Maxi", "M.", 18, bmw)

console.log(andre)
console.log(bunyamin)
console.log(maxi)
