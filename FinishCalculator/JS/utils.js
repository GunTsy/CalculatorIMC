export function notANumber(value) {
  return isNaN(value) || value == ''
}

export function IMC(weight, heigth) {
  return (weight / ((heigth / 100) ** 2)).toFixed(2)
}