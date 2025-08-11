export class Actor {
  private _firstName: string
  private _lastName: string
  private _birthday: Date
  private _gender: string

  constructor(firstName: string, lastName: string, birthday: Date, gender: string) {
    this._firstName = firstName
    this._lastName = lastName
    this._birthday = birthday
    this._gender = gender
  }

  public get firstName(): string {
    return this._firstName
  }
  public set firstName(value: string) {
    this._firstName = value
  }

  public get lastName(): string {
    return this._lastName
  }
  public set lastName(value: string) {
    this._lastName = value
  }

  public get birthday(): Date {
    return this._birthday
  }
  public set birthday(value: Date) {
    this._birthday = value
  }

  public get gender(): string {
    return this._gender
  }
  public set gender(value: string) {
    this._gender = value
  }
}
