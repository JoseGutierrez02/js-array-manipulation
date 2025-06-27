const words = ['spray', 'limit', 'elite', 'exuberant']

const newArray = []
for (let i = 0; i < words.length; i++) {
  const item = words[i]
  if (item.length >= 6) {
    newArray.push(item)
  }
}

console.log('original', words)
console.log('newArray', newArray)
const rta = words.filter((i) => i.length >= 6)
console.log('original', words)
console.log('rta', rta)

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
]

const rta2 = orders.filter((i) => i.delivered && i.total >= 100)
console.log('rta2', rta2)

const search = (query) => {
  return orders.filter((i) => i.customerName.toLowerCase().includes(query))
}

console.log(search('n'))
