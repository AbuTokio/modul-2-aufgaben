import type { Person } from "./Person"

export class SchoolClass {
  _id: number
  _name: string
  private _persons: Person[]
  _endDate?: Date

  set id(value: number) {
    this._id = value
  }

  set name(value: string) {
    this._name = value
  }

  get persons(): Person[] {
    return this._persons
  }

  constructor(id: number, name: string, persons: Person[]) {
    this._id = id
    this._name = name
    this._persons = persons
    console.log("School class creation successful")
  }
}
