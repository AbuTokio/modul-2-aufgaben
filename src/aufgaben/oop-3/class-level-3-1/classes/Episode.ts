import type { Actor } from "./Actor"

export class Episode {
  private _title: string
  private _length: number
  private _description: string
  private _actors: Actor[]

  constructor(title: string, length: number, description: string, actors: Actor[]) {
    this._title = title
    this._length = length
    this._description = description
    this._actors = actors
  }

  public get title(): string {
    return this._title
  }
  public set title(value: string) {
    this._title = value
  }

  public get length(): number {
    return this._length
  }
  public set length(value: number) {
    this._length = value
  }

  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }

  public get actors(): Actor[] {
    return this._actors
  }
  public set actors(value: Actor[]) {
    this._actors = value
  }
}
