import "../../../style.css"
import { Car } from "./classes/Car"
import { Driver } from "./classes/Driver"
import { CarType } from "./enums/CarType"

const porsche = new Car("Porsche", 2025, 130, CarType.COUPE)
const andre = new Driver("Andre", "S.", 30, porsche, 2012)

const tesla = new Car("Tesla", 2024, 150, CarType.TRUCK)
const bunyamin = new Driver("Bünyamin", "K.", 29, tesla, 2013)

const bmw = new Car("BMW", 2024, 200, CarType.CONVERTIBLE)
const maxi = new Driver("Maxi", "M.", 18, bmw, 2023)

console.log(andre)
console.log(bunyamin)
console.log(maxi)

console.log(bunyamin.getCarType())
