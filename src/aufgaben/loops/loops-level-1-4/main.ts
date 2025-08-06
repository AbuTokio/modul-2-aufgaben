import "../../../style.css"

const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (let i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i])
}
console.log("-----------------")
for (const friend of friendNames) {
  console.log(friend)
}
