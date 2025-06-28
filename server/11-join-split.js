const elements = ['Fire', 'Air', 'Water']

let rtaFinal = ''
let separator = '--'
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];  
  rtaFinal += element + (i != elements.length-1 ? separator : '')
}

console.log('for', rtaFinal)
const rta = elements.join('--')
console.log('join', rta)

const title = 'Curso de manipulacion de arrays'
const titleUrl = title.split(' ').join('-').toLowerCase()
console.log('titleUrl', titleUrl)
