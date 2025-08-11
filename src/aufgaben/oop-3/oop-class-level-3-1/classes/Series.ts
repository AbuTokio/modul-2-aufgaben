import type { Episode } from "./Episode"

export class Series {
  private _title: string
  private _description: string
  private _startYear: number
  private _endYear: number | null
  private _episodes: Episode[]

  constructor(title: string, description: string, startYear: number, endYear: number | null, episodes: Episode[]) {
    this._title = title
    this._description = description
    this._startYear = startYear
    this._endYear = endYear
    this._episodes = episodes
  }

  public get title(): string {
    return this._title
  }
  public set title(value: string) {
    this._title = value
  }

  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }

  public get startYear(): number {
    return this._startYear
  }
  public set startYear(value: number) {
    this._startYear = value
  }

  public get endYear(): number | null {
    return this._endYear
  }
  public set endYear(value: number | null) {
    this._endYear = value
  }

  public get episodes(): Episode[] {
    return this._episodes
  }
  public set episodes(value: Episode[]) {
    this._episodes = value
  }
}
