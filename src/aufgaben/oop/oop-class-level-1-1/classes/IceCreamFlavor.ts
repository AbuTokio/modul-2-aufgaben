export class IceCreamFlavor {
  private _name: string = ""
  _price: number = 0
  private _isPopular: boolean = false
  _description?: string = undefined

  get name(): string {
    return this._name
  }

  get isPopular(): boolean {
    return this._isPopular
  }

  constructor(name: string, price: number, isPopular: boolean, description?: string) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
    this._description = description
  }
}
