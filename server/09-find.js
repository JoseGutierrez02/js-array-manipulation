const numbers = [1,30,39,29,10,13]

let rta = undefined
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 30) {
    rta = element
    break
  }
}

console.log('for', rta)
const rta2 = numbers.find((i) => i === 30)
console.log('find', rta2)

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
]

const rta3 = products.find((i) => i.id === '🍔')
console.log('find', rta3)
const rta4 = products.findIndex((i) => i.id === '🍔')
console.log('findIndex', rta4)
