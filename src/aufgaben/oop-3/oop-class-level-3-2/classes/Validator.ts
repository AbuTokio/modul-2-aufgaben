import * as EmailValidator from "email-validator"

export class Validator {
  private _email: string

  constructor(email: string) {
    this._email = email
  }

  public get email(): string {
    return this._email
  }
  public set email(value: string) {
    this._email = value
  }

  static validateEmail(email: string): boolean {
    return EmailValidator.validate(email)
  }
}
