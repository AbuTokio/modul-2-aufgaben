type TJuice = {
  name: string
  percentage: number
  type: string
}

type TMixer = {
  name: string
  type: string
  carbonated: boolean
}

export type TVirginCocktail = TJuice & TMixer
