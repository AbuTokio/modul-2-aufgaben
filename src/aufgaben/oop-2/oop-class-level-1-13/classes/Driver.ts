import { CarType } from "../enums/CarType"
import { Car } from "./Car"

export class Driver {
  _firstName: string
  _lastName: string
  _age: number
  _car: Car
  private _licenseFromYear: number

  public get licenseFromYear(): number {
    return this._licenseFromYear
  }

  getCarType(): CarType {
    return this._car._carType
  }

  constructor(firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number) {
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
    this._car = car
    this._licenseFromYear = licenseFromYear
  }
}
