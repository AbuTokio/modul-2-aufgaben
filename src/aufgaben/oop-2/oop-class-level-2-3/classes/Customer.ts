export class Customer {
  private _name: string = ""
  private _email: string = ""
  private _address: string = ""
  private _postalCode: string = ""
  private _city: string = ""

  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    if (value.length <= 60) {
      this._name = value
    } else {
      console.error("The name must be 60 characters or less!")
    }
  }

  public get email(): string {
    return this._email
  }
  public set email(value: string) {
    if (value.includes("@") && value.split("@")[1].includes(".")) {
      this._email = value
    } else {
      console.error("You must enter a valid e-mail address!")
    }
  }

  public get address(): string {
    return this._address
  }
  public set address(value: string) {
    this._address = value
  }

  public get postalCode(): string {
    return this._postalCode
  }
  public set postalCode(value: string) {
    if (value.length === 5 && Number(value) >= 0 && Number(value) <= 99999) {
      this._postalCode = value
    } else {
      console.error("You must enter a valid postal code!")
    }
  }

  public get city(): string {
    return this._city
  }
  public set city(value: string) {
    this._city = value
  }

  constructor(name: string, email: string, address: string, postalCode: string, city: string) {
    this.name = name
    this.email = email
    this._address = address
    this.postalCode = postalCode
    this._city = city
  }
}
