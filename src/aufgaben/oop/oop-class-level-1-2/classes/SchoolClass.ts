export class SchoolClass {
  private _id: number
  private _name: string
  _endDate?: Date

  set id(value: number) {
    this._id = value
  }

  set name(value: string) {
    this._name = value
  }

  constructor(id: number, name: string) {
    this._id = id
    this._name = name
    console.log("School class creation successful")
  }
}
