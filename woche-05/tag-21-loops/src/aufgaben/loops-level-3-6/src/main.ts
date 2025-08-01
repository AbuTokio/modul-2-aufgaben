import "./style.css"

function getMean(testResults: number[]): string {
  let sum = 0

  for (let i = 0; i < testResults.length; i++) {
    sum += testResults[i]
  }

  const mean = sum / testResults.length

  if (mean < 50) {
    return "Ungenügend"
  } else if (mean >= 50 && mean < 60) {
    return "Mangelhaft"
  } else if (mean >= 60 && mean < 70) {
    return "Ausreichend"
  } else if (mean >= 70 && mean < 80) {
    return "Befriedigend"
  } else if (mean >= 80 && mean < 90) {
    return "Gut"
  } else if (mean >= 90) {
    return "Sehr gut"
  }
}

console.log(getMean([44, 11, 70, 80, 52, 88, 94, 3, 25, 46]))
console.log(getMean([44, 11, 50, 33, 42, 12]))
console.log(getMean([55, 58, 65, 48, 56, 80]))
console.log(getMean([71, 72, 73, 74, 75, 76, 77]))
console.log(getMean([80, 90, 70, 75, 85, 95]))
console.log(getMean([90, 99, 98, 95, 100, 93]))
