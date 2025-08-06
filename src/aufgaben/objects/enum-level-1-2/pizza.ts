enum PizzaSize {
  Small,
  Medium,
  Large,
  Family,
}

enum PizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Sucuk,
  Mushroom,
  Tuna,
  Shrimps,
  Pineapple,
}

type TPizza = {
  pizzaSize: PizzaSize
  ingredients: PizzaIngredients[]
}

const pizzaOne: TPizza = {
  pizzaSize: PizzaSize.Large,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Mushroom],
}

const pizzaTwo: TPizza = {
  pizzaSize: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Pineapple],
}

const pizzaThree: TPizza = {
  pizzaSize: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Sucuk, PizzaIngredients.Onion],
}

const pizzaFour: TPizza = {
  pizzaSize: PizzaSize.Family,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Shrimps, PizzaIngredients.Tuna],
}

console.log(pizzaOne)
console.log(pizzaTwo)
console.log(pizzaThree)
console.log(pizzaFour)
