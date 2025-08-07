import { Gender } from "../enums/Gender"

export class Person {
  private _name: string
  private _birthday: Date
  private _gender: Gender

  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }

  public get birthday(): Date {
    return this._birthday
  }

  public get gender(): Gender {
    return this._gender
  }
  public set gender(value: Gender) {
    this._gender = value
  }

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name
    this._birthday = birthday
    this._gender = gender
  }
}
