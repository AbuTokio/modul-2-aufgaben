import "../../../style.css"

const fruits: string[] = ["🍇", "🍌", "🍒", "🍎"]

const juice: string[] = fruits.map((value) => value + "🥤")

console.log(juice)
