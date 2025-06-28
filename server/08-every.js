const numbers = [1,30,39,29,10,13]

let rta = true
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element >= 40) {
    rta = false
  }
}

console.log('for', rta)
const rta2 = numbers.every((i) => i <= 40)
console.log('rta2', rta2)

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const isAdultTeam = team.every((i) => i.age >= 18)
console.log('isAdultTeam', isAdultTeam)
