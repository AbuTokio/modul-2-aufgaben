export class IceCreamFlavor {
  private _name: string = ""
  private _price: number = 0
  private _isPopular: boolean = false
  private _description?: string = undefined

  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }

  public get price(): number {
    return this._price
  }
  public set price(value: number) {
    this._price = value
  }

  public get isPopular(): boolean {
    return this._isPopular
  }
  public set isPopular(value: boolean) {
    this._isPopular = value
  }

  public get description(): string | undefined {
    return this._description
  }
  public set description(value: string | undefined) {
    this._description = value
  }

  getTotalPrice(amount: number): number {
    return amount * this.price
  }

  printInfo(): void {
    console.log(`Flavor ${this.name} is ${this.isPopular ? "popular" : "not popular"} and costs ${this.price} Euro.`)
  }

  getLengthOfDescription(): number {
    if (this.description) {
      return this.description.length
    } else {
      return 0
    }
  }

  constructor(name: string, price: number, isPopular: boolean, description?: string) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
    this._description = description
  }
}
