const pets = ['cat', 'dog', 'bat']

let includedInArray = false
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  if (element === 'dog') {
    includedInArray = true
    break
  }
}

console.log('for', includedInArray)
const rta = pets.includes('dog')
console.log('includes', rta)
